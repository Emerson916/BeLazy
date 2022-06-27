const buildErrorObject = require("../../../config/factory-function");
const { getAllSerie } = require("../../../repository/players-videos-repository/series/series-postgres-repository");

async function getAllSerieService() {
  const listSerie = await getAllSerie();

  if (listSerie) {
    return listSerie;
  } else {
      return buildErrorObject("Não foi possível listar os usuários")
  }
}

module.exports = getAllSerieService;
