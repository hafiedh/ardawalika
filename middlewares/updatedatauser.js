const { User } = require("../models");
const { Op } = require("sequelize");

async function updateDataUser(req, res, next) {
  try {
    const { id, email } = req.user;
    const obj = JSON.parse(JSON.stringify(req.body));
    const { username, fullname, phoneNumber, address } = obj;
    const currentUser = await User.findOne({
      [Op.or]: [{ email }, { username }],
      attributes: ["username", "fullname", "phoneNumber", "address"],
    });
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
