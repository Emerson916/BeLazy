const jsonwebtoken = require("jsonwebtoken");
const authConfig = require("./auth.json");

function generateToken(params = {}) {
  return jsonwebtoken.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = generateToken;
