const {
  selectFilmByTitle,
  insertNewFilm,
} = require("../../../repository/players-videos-repository/films/films-postgres-repository");
const buildErrorObject = require("../../../config/factory-function");

async function createNewFilmService(
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  duration,
  sinopse,
  type_video
) {
  const checkingIdFilm = await selectFilmByTitle(title_video);

  if (checkingIdFilm) {
    return buildErrorObject("Esse filme já existe");
  } else {
    const insertFilm = await insertNewFilm(
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      duration,
      sinopse,
      type_video
    );

    if (insertFilm.rowCount > 0) {
      console.log(`Filme ${title_video} criado`);
      return insertFilm;
    } else {
      console.log("Não foi possível criar o filme");
      return buildErrorObject("Não foi possível criar o filme");
    }
  }
}

module.exports = createNewFilmService;
