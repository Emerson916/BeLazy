const buildErrorObject = require("../../../config/factory-function");
const {
  getSerieById,
} = require("../../../repository/players-videos-repository/series/series-postgres-repository");

async function getOneSerieService(id) {
  const listOneSerie = await getSerieById(id);

  if (listOneSerie) {
    return listOneSerie;
  } else {
    return buildErrorObject("Não foi possível listar de Series");
  }
}

module.exports = getOneSerieService;
