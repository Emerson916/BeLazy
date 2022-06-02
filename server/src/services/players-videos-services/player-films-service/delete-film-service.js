const buildErrorObject = require("../../../config/factory-function");
const { deleteFilmById } = require("../../../repository/players-videos-repository/videos-postgres-repository");

async function deleteFilmService(id) {
  const deletingFilm = await deleteFilmById(id);

  if (deletingFilm) {
    return deletingFilm;
  } else {
    return buildErrorObject("Falha ao deletar o usuário");
  }
}

module.exports = deleteFilmService;
