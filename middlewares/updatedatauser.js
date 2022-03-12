const { User } = require("../models");
const { Op } = require("sequelize");
const { decode } = require("../helpers/bcrypt");

async function updateDataUser(req, res, next) {
  try {
    const { id, email } = req.user;
    const obj = JSON.parse(JSON.stringify(req.body));
    const { username, fullname, phoneNumber, address, password, confirm_password, confirm_new_password } = obj;
    const currentUser = await User.findOne({
      [Op.or]: [{ id }, { email }]
    });
    if (!currentUser) {
      throw { status: 400, message: "User not found" };
    }
    if (confirm_password !== confirm_new_password) {
      throw { status: 400, message: "Confirm password and New password Not match" };
    }
    const passwordDecoded = decode(password, currentUser.password);
    if (!passwordDecoded) {
      throw { status: 400, message: "Old password is wrong" };
    }
    const isDataChanged =
      JSON.stringify(currentUser) ===
      JSON.stringify({ username, fullname, phoneNumber, address });
    if (isDataChanged) {
      throw {
        name: "update",
        message: "No Changes",
      };
    }
    await User.update(
      {
        username,
        fullname,
        phoneNumber,
        address,
        password: password,
      },
      {
        where: { id, email },
        returning: true,
      }
    );
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = updateDataUser;
