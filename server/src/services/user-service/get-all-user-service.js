const buildErrorObject = require("../../config/factory-function");
const {
  getAllUsers,
} = require("../../repository/user-repository/postgres-repository");

async function getAllUsersService() {
  const listUsers = await getAllUsers();

  if (listUsers) {
    return listUsers;
  } else {
      return buildErrorObject("Não foi possível listar os usuários")
  }
}

module.exports = getAllUsersService;
