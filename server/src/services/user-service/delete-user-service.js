const buildErrorObject = require("../../config/factory-function");
const {
  deleteUserById,
} = require("../../repository/user-repository/user-postgres-repository");

async function deleteUserService(id) {
  const deletingUser = await deleteUserById(id);

  if (deletingUser) {
    return deletingUser;
  } else {
    return buildErrorObject("Falha ao deletar o usuário");
  }
}

module.exports = deleteUserService;
