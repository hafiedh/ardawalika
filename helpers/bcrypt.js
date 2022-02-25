const bcrypt = require("bcryptjs");

function encode(password) {
  return bcrypt.hash(password, 10);
}

function decode(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = { encode, decode };
