const createNewEpisodeService = require("../../services/episodes-service/create-episodes-services");

function createEpisodeController(app) {
  app.post("/v1/ep", async (req, resp) => {
    const { title_eps } = req.body;

    if (!title_eps) {
      resp.status(400).send({
        message: "Adicione um titulo para o episódio!",
      });
    } else {
      const createEpisodes = await createNewEpisodeService(title_eps);

      const message = createEpisodes.message;

      if (createEpisodes.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createEpisodes.rows);
      }
    }
  });
}

module.exports = createEpisodeController;
