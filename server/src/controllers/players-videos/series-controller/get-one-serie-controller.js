const getOneSerieService = require("../../../services/players-videos-services/player-series-service/get-one-serie-service");

function getOneSerieController(app) {
  app.get("/v1/serie/:id", async (req, resp) => {
    const { id } = req.params;

    const listOneSerie = await getOneSerieService(id);
    const message = listOneSerie.message;

    if (listOneSerie.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listOneSerie);
    }
  });
}

module.exports = getOneSerieController;
