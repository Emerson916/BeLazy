const deleteUserService = require("../../services/user-service/delete-user-service");

function deleteUser(app) {
  app.delete("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;

    const deleteUserById = await deleteUserService(id);
    const message = deleteUserById.message;

    if (deleteUserById.error) {
      resp.status(400).send({ message });
    } else {
      resp.status(200).send({});
    }
  });
}

module.exports = deleteUser;
