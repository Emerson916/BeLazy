const createUserService = require("../../services/user-service/create-user-service");

function createUser(app) {
  app.post("/v1/users", async (req, resp) => {
    const { email, password, username } = req.body;

    if (!email | !password | !username) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const createUser = await createUserService(email, password, username);

      const message = createUser.message;

      if (createUser.error) {
        resp.status(400).send({ message });
      } else {
        resp.status(201).send({ message });
      }
    }
  });
}

module.exports = createUser;
