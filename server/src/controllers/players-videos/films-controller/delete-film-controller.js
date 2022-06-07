const deleteFilmService = require("../../../services/players-videos-services/player-films-service/delete-film-service");

function deleteFilmController(app) {
  app.delete("/v1/films/:id", async (req, resp) => {
    const { id } = req.params;

    const deleteFilmById = await deleteFilmService(id);
    const message = deleteFilmById.message;

    if (deleteFilmById.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send({});
    }
  });
}

module.exports = deleteFilmController;
