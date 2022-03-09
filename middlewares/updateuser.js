const { verify } = require("../helpers/jwt");
const { User } = require("../models");
const { Op } = require("sequelize");

async function updateDataUser(req, res, next) {
  try {
    const token = req.headers.access_token;
    const payload = verify(token);
    const { username, fullname, phoneNumber, address } = req.body;
    const update = await User.update(
      {
        username,
        fullname,
        phoneNumber,
        address,
      },
      {
        where: {
          [Op.or]: [{ email: payload.email }, { username: payload.email }],
        },
      }
    );
    if (update[0] === 0) throw { status: 404, message: "User not found" };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = updateDataUser;
