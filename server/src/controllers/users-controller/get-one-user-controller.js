const getOneUserService = require("../../services/user-service/get-one-user-service");

function getOneUserController(app) {
  app.get("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;

    const listOneUser = await getOneUserService(id);
    const message = listOneUser.message;

    if (listOneUser.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send(listOneUser);
    }
  });
}

module.exports = getOneUserController;
