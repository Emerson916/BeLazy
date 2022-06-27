const getAllSerieService = require("../../../services/players-videos-services/player-series-service/get-all-series-service");

function getAllSerieController(app) {
  app.get("/v1/series", async (req, resp) => {
    const { id } = req.params;

    const listAllSerie = await getAllSerieService(id);
    const message = listAllSerie.message;

    if (listAllSerie.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listAllSerie);
    }
  });
}

module.exports = getAllSerieController;
