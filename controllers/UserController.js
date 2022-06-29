const { User } = require("../models");
const { Op } = require("sequelize");
const { sign, verify } = require("../helpers/jwt");
const { decode } = require("../helpers/bcrypt");
const { sendEmail, sendEmailResetPassword, sendEmailForgotPassword } = require("../helpers/nodemailer");
const generator = require("generate-password");
const fetchGoogleUser = require("../helpers/googleAuth");

class UserController {
  static async register(req, res, next) {
    try {
      let { email, password, username, fullname, phoneNumber = "", imgUrl = "", address = "", role = "user" } = req.body;
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

      if (!result) res.redirect("/reigster?error=Register failed");

      const token = sign({ email, username, id: result.id, role });
      const url = `https://ardawalika.herokuapp.com/users/verify/${token}`;
      sendEmail(email, username, url);
      res.redirect("/login?error=Register success, Sent a verification email to your email");
    } catch (err) {
      res.redirect(`/register?error=${err.errors[0].message}`);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: { [Op.eq]: email } },
      });
      if (!user) {
        return res.redirect("/login?error=Wrong Email or Password");
      }
      const isMatch = await decode(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.redirect("/login?error=Wrong Email or Password");
      }
      const token = sign({
        email,
        username: user.username,
        id: user.id,
        role: user.role,
      });
      req.session.token = token;
      req.session.user = user;
      req.session.navbar = true;
      if (user.role === "admin") {
        res.redirect("/admin/dashboard");
      } else {
        res.redirect(`/users/profile/${user.id}`);
      }
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
      res.send("Use this link as new password and confirm password form. Don't tell to others about your AccessKey");
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
      // res.status(200).json({
      //   status: 200,
      //   message: "Your new password has been sent to your email",
      // });
      res.redirect("/login?error=Reset password success, Your new password has been sent to your email");
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
            username: payload.username,
          },
        }
      );
      const data = payload.email;
      res.render("verifikasi", { data });
    } catch (err) {
      next(err);
    }
  }

  static async getProfile(req, res, next) {
    try {
      const { id } = req.params;
      const users = await User.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });
      if (!users) {
        throw { status: 404, message: "User not found" };
      }
      const user = req.session.user;
      res.render("profile", { Users: users, user });
    } catch (error) {
      next(error);
    }
  }
  static async updateUserPhoto(req, res, next) {
    try {
      const { id, email } = req.user;
      const image = req.body.image;
      const update = await User.update(
        { imgUrl: image },
        {
          where: {
            [Op.or]: [{ id }, { email }],
          },
        }
      );
      if (update) {
        res.redirect(`/users/profile/${id}`);
      } else {
        throw { status: 400, message: "Failed to update data" };
      }
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/login");
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
