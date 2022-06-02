const getOneFilmService = require("../../../services/players-videos-services/player-films-service/get-one-film-service");

function getOneFilm(app) {
  app.get("/v1/films/:id", async (req, resp) => {
    const { id } = req.params;

    const listOneFilm = await getOneFilmService(id);
    const message = listOneFilm.message;

    if (listOneFilm.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listOneFilm);
    }
  });
}

module.exports = getOneFilm;
