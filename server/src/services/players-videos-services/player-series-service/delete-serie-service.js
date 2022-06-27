const buildErrorObject = require("../../../config/factory-function");
const { deleteSerieById, deleteSerieSeasonById_Serie } = require("../../../repository/players-videos-repository/series/series-postgres-repository");

async function deleteSerieService(id) {
  await deleteSerieSeasonById_Serie(id);
  const deletingSerie = await deleteSerieById(id)

  if (deletingSerie) {
    return deletingSerie;
  } else {
    return buildErrorObject("Falha ao deletar Serie");
  }
}

module.exports = deleteSerieService;
