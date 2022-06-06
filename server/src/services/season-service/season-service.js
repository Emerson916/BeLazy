const buildErrorObject = require("../../config/factory-function");
const {
  insertNewSeason,
  selectSeasonByNumberSeasonAndId_anime,
} = require("../../repository/season-repository/season-repository");

async function createNewSeasonService(id_anime, number_season, imageCard, episodes) {
  const checkingSeason = await selectSeasonByNumberSeasonAndId_anime(id_anime, number_season);

  if (checkingSeason) {
    console.log("Essa temporada já foi adicionada para esse anime");
    return buildErrorObject("Essa temporada já foi adicionada para esse anime");
  } else {
    const insert = await insertNewSeason(id_anime, number_season, imageCard, episodes);

    if (insert > 0) {
      console.log(`${number_season}° temporada adicionada com sucesso!`);
      return { message: "Temporada adicionada com sucesso" };
    } else {
      console.log("Não foi possível adicionar a temporada");
      return buildErrorObject("Não foi possível adicionar a temporada");
    }
  }
}

module.exports = createNewSeasonService;
