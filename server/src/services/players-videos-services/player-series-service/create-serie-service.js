const {
  selectSerieByTitle,
  insertNewSerie,
} = require("../../../repository/players-videos-repository/series/series-postgres-repository");
const buildErrorObject = require("../../../config/factory-function");

async function createNewSerieService(
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse,
  type_video,
  season
) {
  const checkingExistsSerie = await selectSerieByTitle(title_video);

  if (checkingExistsSerie) {
    return buildErrorObject("Esse Serie já existe");
  } else {
    const insertSerie = await insertNewSerie(
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      sinopse,
      type_video,
      season
    );

    if (insertSerie.rowCount > 0) {
      console.log(`Serie ${title_video} adicionado`);
      return insertSerie;
    } else {
      console.log("Não foi possível adicionar o Serie");
      return buildErrorObject("Não foi possível adicionar o Serie");
    }
  }
}

module.exports = createNewSerieService;
