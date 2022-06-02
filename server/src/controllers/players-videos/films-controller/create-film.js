const createNewFilmService = require("../../../services/players-videos-services/player-films-service/create-films-service");

function createFilm(app) {
  app.post("/v1/films", async (req, resp) => {
    const {
      user_id,
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
      const createFilm = await createNewFilmService(
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

      const message = createFilm.message;

      if (createFilm.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createFilm);
      }
    }
  });
}

module.exports = createFilm;
