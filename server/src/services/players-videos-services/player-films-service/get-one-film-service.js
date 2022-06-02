const buildErrorObject = require("../../../config/factory-function");
const {
  getFilmById,
} = require("../../../repository/players-videos-repository/videos-postgres-repository");

async function getOneFilmService(id) {
  const listOneFilm = await getFilmById(id);

  if (listOneFilm) {
    return listOneFilm;
  } else {
    return buildErrorObject("Não foi possível listar o usuário");
  }
}

module.exports = getOneFilmService;
