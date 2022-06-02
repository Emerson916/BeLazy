const buildErrorObject = require("../../../config/factory-function");
const { getAllFilms } = require("../../../repository/players-videos-repository/videos-postgres-repository");

async function getAllFilmsService() {
  const listUsers = await getAllFilms();

  if (listUsers) {
    return listUsers;
  } else {
    return buildErrorObject("Não foi possível listar os usuários");
  }
}

module.exports = getAllFilmsService;
