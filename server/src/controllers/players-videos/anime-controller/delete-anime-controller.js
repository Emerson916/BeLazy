const deleteAnimeService = require("../../../services/players-videos-services/anime-service/delete-anime-service");

function deleteAnimeController(app) {
  app.delete("/v1/anime/:id", async (req, resp) => {
    const { id } = req.params;

    const deleteAnimeById = await deleteAnimeService(id);
    const message = deleteAnimeById.message;

    if (deleteAnimeById.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send({});
    }
  });
}

module.exports = deleteAnimeController;
