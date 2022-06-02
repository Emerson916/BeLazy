const buildErrorObject = require("../../../config/factory-function");
const { getFilmById, updateFilmById } = require("../../../repository/players-videos-repository/videos-postgres-repository");

async function updateFilmService(dataFilm, id) {
  try {
    const update = await updateFilmById(dataFilm, id);
    if (!update) {
      return buildErrorObject("Não foi possível fazer as alterações");
    } else {
      return await getFilmById(id);
    }
  } catch (error) {
    return buildErrorObject("Email já existe, coloque outro");
  }
}

module.exports = updateFilmService;
