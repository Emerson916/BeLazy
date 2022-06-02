const {
  selectFilmByTitle,
  insertNewFilm,
} = require("../../../repository/players-videos/videos-postgres-repository");
const buildErrorObject = require("../../../config/factory-function");

async function createNewFilmService(
  user_id,
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse
) {
  const checkingIdFilm = await selectFilmByTitle(title_video);

  if (checkingIdFilm) {
    return buildErrorObject("Esse filme já existe");
  } else {
    const insertFilm = await insertNewFilm(
      user_id,
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      sinopse
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
