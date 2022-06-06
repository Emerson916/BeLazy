const updateAnimeService = require("../../../services/players-videos-services/anime-service/update-anime-service");

function updateAnimeController(app) {
  app.put("/v1/anime/:id", async (req, resp) => {
    const { id } = req.params;
    const dataAnime = req.body;

    if (!{ dataAnime }) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const update = await updateAnimeService(dataAnime, id);
      const message = update.message;

      if (!update) {
        resp.status(400).send({ message });
      } else {
        resp.status(200).send(update);
      }
    }
  });
}

module.exports = updateAnimeController;
