const buildErrorObject = require("../../../config/factory-function");
const { getAllAnime } = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");

async function getAllAnimeService() {
  const listAnime = await getAllAnime();

  if (listAnime) {
    return listAnime;
  } else {
      return buildErrorObject("Não foi possível listar os usuários")
  }
}

module.exports = getAllAnimeService;
