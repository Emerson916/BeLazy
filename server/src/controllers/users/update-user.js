const updateUserService = require("../../services/user-service/update-user-service");

function updateUser(app) {
  app.put("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;
    const dataUser = req.body;

    if (!dataUser.email | !dataUser.password | !dataUser.username) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const update = await updateUserService(dataUser, id);
      const message = update.message;

      if (!update) {
        resp.status(400).send({ message });
      } else {
        resp.status(200).send(update);
      }
    }
  });
}

module.exports = updateUser;
