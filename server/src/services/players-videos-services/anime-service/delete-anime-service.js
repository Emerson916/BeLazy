const buildErrorObject = require("../../../config/factory-function");
const { deleteAnimeById, deleteAnimeSeasonById_anime } = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");

async function deleteAnimeService(id) {
  await deleteAnimeSeasonById_anime(id);
  const deletingAnime = await deleteAnimeById(id)

  if (deletingAnime) {
    return deletingAnime;
  } else {
    return buildErrorObject("Falha ao deletar anime");
  }
}

module.exports = deleteAnimeService;
