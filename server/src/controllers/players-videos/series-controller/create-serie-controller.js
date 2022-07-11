const createNewSerieService = require("../../../services/players-videos-services/player-series-service/create-serie-service");

function createSerieController(app) {
  app.post("/v1/serie", async (req, resp) => {
    const {
      imageCard,
      imageBanner,
      title_video,
      evaluation,
      favorite,
      releaseYear,
      createAt,
      sinopse,
      type_video,
    } = req.body;

    if (!title_video | !sinopse) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const createSerie = await createNewSerieService(
        imageCard,
        imageBanner,
        title_video,
        evaluation,
        favorite,
        releaseYear,
        createAt,
        sinopse,
        type_video
      );

      const message = createSerie.message;

      if (createSerie.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createSerie.rows);
      }
    }
  });
}

module.exports = createSerieController;
