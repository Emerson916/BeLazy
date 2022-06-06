const {
  selectAnimeByTitle,
  insertNewAnime,
} = require("../../../repository/players-videos-repository/anime/anime-postgres-repository");
const buildErrorObject = require("../../../config/factory-function");

async function createNewAnimeService(
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
    return buildErrorObject("Esse anime já existe");
  } else {
    const insertAnime = await insertNewAnime(
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
      console.log(`Anime ${title_video} adicionado`);
      return insertAnime;
    } else {
      console.log("Não foi possível adicionar o anime");
      return buildErrorObject("Não foi possível adicionar o anime");
    }
  }
}

module.exports = createNewAnimeService;
