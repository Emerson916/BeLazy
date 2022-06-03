const buildErrorObject = require("../../config/factory-function");
const { insertNewSeason, selectUserByNumberSeason } = require("../../repository/season-repository/season-repository");

async function createNewSeasonService(episodes_id, number_season, imageCard) {
  const checkingSeason = await selectUserByNumberSeason(number_season);

  if (checkingSeason) {
    console.log("Essa temporada já foi adicionada");
    return buildErrorObject("Essa temporada já foi adicionada");
  } else {
    const insert = await insertNewSeason(episodes_id, number_season, imageCard);

    if (insert.rowCount > 0) {
      console.log(`${number_season}° temporada adicionada com sucesso!`);
      return { message: "Temporada adicionada com sucesso" };
    } else {
      console.log("Não foi possível adicionar a temporada");
      return buildErrorObject("Não foi possível adicionar a temporada");
    }
  }
}

module.exports = createNewSeasonService;
