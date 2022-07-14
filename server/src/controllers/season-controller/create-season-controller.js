const createNewSeasonService = require("../../services/season-service/create-season-service");

function createSeasonController(app) {
  app.post("/v1/season", async (req, resp) => {
    const { id_title, number_season, episodes } = req.body;

    if (!number_season) {
      resp.status(400).send({
        message: "Adicione qual temporada é, ex: (1, 2, 3...)!",
      });
    } else {
      const createSeason = await createNewSeasonService(
        id_title,
        number_season,
        episodes
      );

      const message = createSeason.message;

      if (createSeason.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send(createSeason.rows);
      }
    }
  });
}

module.exports = createSeasonController;
