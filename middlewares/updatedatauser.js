const { User } = require("../models");
const { Op } = require("sequelize");
const { decode } = require("../helpers/bcrypt");

async function updateDataUser(req, res, next) {
  try {
    const { id, email } = req.user;
    const obj = JSON.parse(JSON.stringify(req.body));
    const { username, fullname, phoneNumber, address, password, confirm_password, confirm_new_password } = obj;
    const currentUser = await User.findOne({
      where: {
        [Op.or]: [{ id }, { email }],
      },
    });

    console.log(email)
    console.log(currentUser.password)
    if (!currentUser) {
      throw { status: 400, message: "User not found" };
    }
    if (confirm_password !== confirm_new_password) {
      throw { status: 400, message: "Confirm password and New password Not match" };
    }
    if(password){
      if (decode(password, currentUser.password) === false) {
        throw { status: 400, message: "Wrong password" };
      }
      const update = await User.update(
        { username, fullname, phoneNumber, address, password: confirm_password },
        {
          where: {
            [Op.or]: [{ id }, { email }],
          },
        }
      );
    }else{
    await User.update(
      {
        username,
        fullname,
        phoneNumber,
        address,
      },
      {
        where: { id, email },
        returning: true,
      }
    );
    }
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = updateDataUser;
