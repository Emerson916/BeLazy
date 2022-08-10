const {
  selectUserByEmail,
  insertNewUser,
} = require("../../repository/user-repository/user-postgres-repository");
const buildErrorObject = require("../../config/factory-function");
const sha1 = require("sha1");

async function createNewUser(email, password, username) {
  const checkingEmail = await selectUserByEmail(email);

  if (checkingEmail) {
    console.log("Usuário já existe");
    return buildErrorObject("Usuário já existe");
  } else {
    const hashPassword = sha1(password);
    const insert = await insertNewUser(email, hashPassword, username);

    if (insert.rowCount > 0) {
      console.log(`Usuário ${username} criado`);
      return { message: "Usuário criado" };
    } else {
      console.log("Não foi possível criar o usuário");
      return buildErrorObject("Não foi possível criar o usuário");
    }
  }
}

module.exports = createNewUser;
