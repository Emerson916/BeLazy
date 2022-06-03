const updateFilmService = require("../../../services/players-videos-services/player-films-service/update-film-service");

function updateFilm(app) {
  app.put("/v1/films/:id", async (req, resp) => {
    const { id } = req.params;
    const dataFilm = req.body;

    if (!{ dataFilm }) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const update = await updateFilmService(dataFilm, id);
      const message = update.message;

      if (!update) {
        resp.status(400).send({ message });
      } else {
        resp.status(200).send(update);
      }
    }
  });
}

module.exports = updateFilm;
