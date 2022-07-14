const buildErrorObject = require("../../config/factory-function");
const {
  insertNewSeason,
  selectSeasonByNumberSeasonAndId_title,
} = require("../../repository/season-repository/season-repository");

async function createNewSeasonService(id_title, number_season, episodes) {
  const checkingSeason = await selectSeasonByNumberSeasonAndId_title(id_title, number_season);

  if (checkingSeason) {
    console.log("Essa temporada já foi adicionada para essa serie");
    return buildErrorObject("Essa temporada já foi adicionada para essa serie");
  } else {
    const insert = await insertNewSeason(id_title, number_season, episodes);

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
