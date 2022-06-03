const createNewSeasonService = require("../../services/season-service/season-service");

function createSeasonController(app) {
  app.post("/v1/season", async (req, resp) => {
    const { episodes_id, number_season, imageCard } = req.body;

    if (!number_season) {
      resp.status(400).send({
        message: "Adicione qual temporada é, ex: (1, 2, 3...)!",
      });
    } else {
      const createEpisodes = await createNewSeasonService(
        episodes_id,
        number_season,
        imageCard
      );

      const message = createEpisodes.message;

      if (createEpisodes.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createEpisodes.rows);
      }
    }
  });
}

module.exports = createSeasonController;
