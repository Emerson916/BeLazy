const createNewAnimeService = require("../../../services/players-videos-services/anime-service/create-anime-service");

function createAnimeController(app) {
  app.post("/v1/anime", async (req, resp) => {
    const {
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      sinopse,
    } = req.body;

    if (!title_video | !sinopse) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const createAnime = await createNewAnimeService(
        imageCard,
        imageBanner,
        title_video,
        evaluation,
        favorite,
        releaseYear,
        createAt,
        sinopse
      );

      const message = createAnime.message;

      if (createAnime.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createAnime.rows);
      }
    }
  });
}

module.exports = createAnimeController;
