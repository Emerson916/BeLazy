const getAllFilmsService = require("../../../services/players-videos-services/player-films-service/get-all-films-service");

function getAllFilmsController(app) {
  app.get("/v1/films", async (_req, resp) => {
    const getAllFilms = await getAllFilmsService();
    const message = getAllFilms.message;

    if (getAllFilms) {
      resp.status(200).send(getAllFilms);
    } else {
      resp.status(400).send({ message });
    }
  });
}

module.exports = getAllFilmsController;
