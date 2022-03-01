const { User } = require("../models");
const { Op } = require("sequelize");
const { sign, verify } = require("../helpers/jwt");
const { decode } = require("../helpers/bcrypt");
const {
  sendEmail,
  sendEmailResetPassword,
  sendEmailForgotPassword,
} = require("../helpers/nodemailer");
const generator = require("generate-password");
const fetchGoogleUser = require("../helpers/googleAuth");
const { randomString } = require("../helpers/randomString");
const Path = require("path");
const fs = require("fs");

class UserController {
  static async register(req, res, next) {
    try {
      let {
        email,
        password,
        username,
        fullname,
        phoneNumber = "",
        imgUrl = "",
        address = "",
        role = "user",
      } = req.body;
      const result = await User.create({
        email,
        password,
        username,
        fullname,
        phoneNumber,
        imgUrl,
        address,
        role,
      });

      if (!result) throw { status: 400, message: "Register failed" };

      const token = sign({ email, fullname, id: result.id });
      const url = `http://localhost:3000/users/verify/${token}`;
      sendEmail(email, fullname, url);
      res.status(201).json({
        status: 201,
        message: `Register success, Sent a verification email to ${email}`,
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: { [Op.eq]: email } },
      });
      if (!user) throw { status: 404, message: "User not found" };
      const isMatch = await decode(password, user.password);
      if (!isMatch) throw { status: 400, message: "Wrong Email or Password" };
      const token = sign({ email, username: user.username, id: user.id });

      res.status(200).json({
        status: 200,
        message: "Login success",
        token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async googleLogin(req, res, next) {
    try {
      let idToken = req.body.idToken;
      let payload = await fetchGoogleUser(idToken);
      let { email, name } = payload;
      const user = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          usename: name,
          password: "12345678",
          role: "user",
        },
      });
      const access_token = sign({
        email,
        username: user[0].username,
        id: user[0].id,
      });
      req.headers.access_token = token;
      res.status(200).json({
        access_token,
        usename: user[0].username,
        userId: user[0].id,
      });
    } catch (error) {
      next(error);
    }
  }

  static async sendLinkforChangePassword(req, res, next) {
    try {
      const email = req.body.email;

      const user = await User.findOne({
        where: { email: email },
      });

      if (user) {
        const token = sign({ email, username: user.username, id: user.id });
        const url = `http://localhost:3000/users/forgotpassword/${token}`;
        sendEmailResetPassword(email, url);
        res.status(200).json({
          status: 200,
          message: "Success",
        });
      } else {
        throw { status: 400, message: "Email not found" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async resetPasswordForm(req, res, next) {
    try {
      const { accessToken } = req.params;
      const payload = verify(accessToken);
      res.send(
        "Use this link as new password and confirm password form. Don't tell to others about your AccessKey"
      );
    } catch (error) {
      next(error);
    }
  }

  static async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user) {
        throw {
          name: "authentication",
          message: "Email doesnt exist",
        };
      }
      const newPassword = generator.generate({
        length: 10,
        numbers: true,
      });
      await User.update({ password: newPassword }, { where: { email } });
      sendEmailForgotPassword(email, newPassword);
      res.status(200).json({
        status: 200,
        message: "Your new password has been sent to your email",
      });
    } catch (error) {
      next(error);
    }
  }

  static async verification(req, res, next) {
    try {
      const { accessToken } = req.params;
      const payload = verify(accessToken);

      await User.update(
        { status: "active" },
        {
          where: {
            id: payload.id,
            email: payload.email,
            fullname: payload.fullname,
          },
        }
      );

      res.status(200).json({ status: 200, message: "Your account is active" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async updateData(req, res, next) {
    try {
      const { accessToken } = req.params;
      const payload = verify(accessToken);
      const { username, email, fullname, phonenumbber, address } = req.body;

      // image update
      // find old image from database
      let user = await User.findOne({
        where: { id: payload.id },
      });
      let imgUrl = user.imgUrl;

      if (req.files) {
        const imgData = req.files.imgUrl;

        // check if images
        if (!imgData.mimetype.includes("image")) {
          throw { status: 400, message: "Not image data" };
        } else {
          if (imgUrl != "") {
            // delete image from storage
            let imgName = imgUrl.split("/");
            imgName = imgName[imgName.length - 1];
            let imgPath = Path.join(__dirname, "../public/images", imgName);
            fs.unlinkSync(imgPath);
          }

          // get new unique name for image
          let newImgName =
            randomString(25) + imgData.mimetype.replace("image/", ".");
          let dirName = Path.join(__dirname, "../public/images", newImgName);

          // move image to storage
          imgData.mv(dirName, function (err, result) {
            if (err) console.log(err);
            if (result) console.log("success");
          });

          imgUrl = `${req.get("host")}/images/${newImgName}`;
        }
      }

      const updateData = {
        username,
        email,
        fullname,
        phonenumbber,
        address,
        imgUrl,
      };

      const options = {
        where: {
          id: payload.id,
        },
      };

      const result = await User.update(updateData, options);

      if (result) {
        res.status(200).json({
          status: 200,
          message: "Update data success",
        });
      } else {
        throw { status: 400, message: "Failed to update data" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
