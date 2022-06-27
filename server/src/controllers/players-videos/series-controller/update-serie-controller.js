const updateSerieService = require("../../../services/players-videos-services/player-series-service/update-serie-service");

function updateSerieController(app) {
  app.put("/v1/serie/:id", async (req, resp) => {
    const { id } = req.params;
    const dataSerie = req.body;

    if (!{ dataSerie }) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const update = await updateSerieService(dataSerie, id);
      const message = update.message;

      if (!update) {
        resp.status(400).send({ message });
      } else {
        resp.status(200).send(update);
      }
    }
  });
}

module.exports = updateSerieController;
