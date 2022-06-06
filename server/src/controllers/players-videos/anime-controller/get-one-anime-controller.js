const getOneAnimeService = require("../../../services/players-videos-services/anime-service/get-one-anime-service");

function getOneAnimeController(app) {
  app.get("/v1/anime/:id", async (req, resp) => {
    const { id } = req.params;

    const listOneAnime = await getOneAnimeService(id);
    const message = listOneAnime.message;

    if (listOneAnime.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listOneAnime);
    }
  });
}

module.exports = getOneAnimeController;
