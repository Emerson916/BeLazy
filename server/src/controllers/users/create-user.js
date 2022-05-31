const sha1 = require("sha1");

function createUser(app) {
  app.post("/v1/users", async (req, resp) => {
    const { email, password, username } = req.body;

    if (!email | !password | !username) {
      resp.status(400).send({
        message: "Preencha os campos!",
      });
    } else {
      const selectUser = `SELECT email FROM users WHERE email = $1`;
      const value = [email];

      const userExists = await req.client
        .query(selectUser, value)
        .then((resp) => resp.rows)
        .catch((e) => {
          req.log.error("erro");
          req.log.error(e);
          return;
        });

      if (!userExists) {
        resp.status(400).send({ message: "User not found" });
      } else {
        const hashPassword = sha1(password);

        const insert = `INSERT INTO users (email, password, name) VALUES ($1, $2, $3)`;

        const values = [email, hashPassword, username];

        const insertUser = await req.client
          .query(insert, values)
          .then((resp) => resp.rows)
          .catch((e) => {
            req.log.error("erro");
            req.log.error(e);
            return;
          });

        resp.status(200).send(insertUser);
      }
    }
  });
}

module.exports = createUser;
