const createNewFilmService = require("../../../services/players-videos-services/player-films-service/create-films-service");

function createFilmController(app) {
  app.post("/v1/films", async (req, resp) => {
    const {
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
    } = req.body;

    if (!title_video | !sinopse) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const createFilm = await createNewFilmService(
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

      const message = createFilm.message;

      if (createFilm.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createFilm.rows);
      }
    }
  });
}

module.exports = createFilmController;
