const buildErrorObject = require("../../../config/factory-function");
const { updateAnimeById, getAnimeById } = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");

async function updateAnimeService(dataAnime, id) {
  try {
    const update = await updateAnimeById(dataAnime, id);
    if (!update) {
      return buildErrorObject("Não foi possível fazer as alterações");
    } else {
      return await getAnimeById(id);
    }
  } catch (error) {
    return buildErrorObject("Anime já existe, coloque outro");
  }
}

module.exports = updateAnimeService;
