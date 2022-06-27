const buildErrorObject = require("../../../config/factory-function");
const {
  updateSerieById,
  getSerieById,
} = require("../../../repository/players-videos-repository/series/series-postgres-repository");

async function updateSerieService(dataSerie, id) {
  try {
    const update = await updateSerieById(dataSerie, id);
    if (!update) {
      return buildErrorObject("Não foi possível fazer as alterações");
    } else {
      return await getSerieById(id);
    }
  } catch (error) {
    return buildErrorObject("Serie já existe, coloque outro");
  }
}

module.exports = updateSerieService;
