  const buildErrorObject = require("../../../config/factory-function");
const { getAnimeById } = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");
  
  async function getOneAnimeService(id) {
    const listOneAnime = await getAnimeById(id);
  
    if (listOneAnime) {
      return listOneAnime;
    } else {
      return buildErrorObject("Não foi possível listar de animes");
    }
  }
  
  module.exports = getOneAnimeService;
  