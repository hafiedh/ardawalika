const { verify } = require("../helpers/jwt");
const { User } = require("../models");
const { Op } = require("sequelize");

async function authentication(req, res, next) {
  try {
    const token = req.headers.access_token;
    const payload = verify(token);
    const exp = payload.exp;
    if (Date.now() >= exp * 1000)
      throw { status: 400, message: "Token expired, Please Login again" };
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: payload.email }, { username: payload.username }],
      },
    });
    if (!user) throw { status: 404, message: "User not found" };
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authentication;
