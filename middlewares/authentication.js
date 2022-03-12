const { verify } = require("../helpers/jwt");
const { User } = require("../models");
const { Op } = require("sequelize");

async function authentication(req, res, next) {
  try {
      const token = req.session.token;
      const payload = verify(token);
      const exp = payload.exp;
      if (Date.now() >= exp * 1000)
        throw { status: 400, message: "Token expired, Please Login again" };
      const user = await User.findOne({
        where: {
          [Op.or]: [{ email: payload.email }, { id: payload.id }],
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
