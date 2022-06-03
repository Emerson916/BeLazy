const {
  selectAnimeByTitle,
  insertNewAnime,
} = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");
const buildErrorObject = require("../../../config/factory-function");

async function createNewAnimeService(
  season_id,
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse
) {
  const checkingExistsAnime = await selectAnimeByTitle(title_video);

  if (checkingExistsAnime) {
    return buildErrorObject("Esse filme já existe");
  } else {
    const insertAnime = await insertNewAnime(
      season_id,
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      sinopse
    );

    if (insertAnime.rowCount > 0) {
      console.log(`Filme ${title_video} criado`);
      return insertAnime;
    } else {
      console.log("Não foi possível criar o filme");
      return buildErrorObject("Não foi possível criar o filme");
    }
  }
}

module.exports = createNewAnimeService;
