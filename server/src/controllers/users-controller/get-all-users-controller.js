const getAllUsersService = require("../../services/user-service/get-all-user-service");

function getAllUsers(app) {
  app.get("/v1/users", async (_req, resp) => {
    const getAllUsers = await getAllUsersService();
    const message = getAllUsers.message;

    if (getAllUsers) {
      resp.status(200).send(getAllUsers);
    } else {
      resp.status(400).send({ message });
    }
  });
}

module.exports = getAllUsers;
