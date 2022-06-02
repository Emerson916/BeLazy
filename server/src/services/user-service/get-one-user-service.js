const {
  getUserById,
} = require("../../repository/user-repository/user-postgres-repository");
const buildErrorObject = require("../../config/factory-function");

async function getOneUserService(id) {
  const listOneUser = await getUserById(id);

  if (listOneUser) {
    return listOneUser;
  } else {
    return buildErrorObject("Não foi possível listar o usuário");
  }
}

module.exports = getOneUserService;
