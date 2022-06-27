const deleteSerieService = require("../../../services/players-videos-services/player-series-service/delete-serie-service");

function deleteSerieController(app) {
  app.delete("/v1/serie/:id", async (req, resp) => {
    const { id } = req.params;

    const deleteSerieById = await deleteSerieService(id);
    const message = deleteSerieById.message;

    if (deleteSerieById.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send({});
    }
  });
}

module.exports = deleteSerieController;
