const getAllAnimeService = require("../../../services/players-videos-services/anime-service/get-all-anime-service");

function getAllAnimeController(app) {
  app.get("/v1/anime", async (req, resp) => {
    const { id } = req.params;

    const listAllAnime = await getAllAnimeService(id);
    const message = listAllAnime.message;

    if (listAllAnime.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listAllAnime);
    }
  });
}

module.exports = getAllAnimeController;
