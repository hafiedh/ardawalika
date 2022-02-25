function errorHandler(err, req, res, next) {
  let code = 500;
  let message = err.message || ["Internal server error"];

  switch (err.name) {
    case "SequelizeValidationError":
      code = 500;
      message = err.errors.map((e) => {
        return e.message;
      });
      res.status(code).json({ code, message });
      break;
    case "SequelizeUniqueConstraintError":
      code = 500;
      message = err.errors[0].message;
      res.status(code).json({ code, message });
      break;
    case "authentication":
      code = 401;
      message = [err.message];
      res.status(code).json({ code, message });
      break;
    case "update":
      code = 400;
    default:
      res.status(code).json({ code, message });
      break;
  }
}

module.exports = errorHandler;
