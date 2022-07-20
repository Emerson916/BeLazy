const buildErrorObject = require("../config/factory-function");
const {
  selectUserExisting,
} = require("../repository/user-repository/user-postgres-repository");
const sha1 = require("sha1");

const generateToken = require("../config/generateToken");

function authenticate(app) {
  app.post("/auth", async (req, resp) => {
    const { email, password } = req.body;

    const hashPassword = sha1(password);
    const user = await selectUserExisting(email, hashPassword);
    console.log("Usuário", user);

    if (!user) {
      console.log("Usuário não existe");
      resp.send({ message: "Usuário não existe" });
      return buildErrorObject("Usuário não existe");
    }

    resp.send({ email, token: generateToken(user.id) });
  });
}

module.exports = authenticate;
