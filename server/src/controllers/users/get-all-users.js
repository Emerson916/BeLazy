function getAllUsers(app) {
  app.get("/v1/users", async (req, resp) => {
    const selectUsers = `SELECT id, email, name, last_login FROM users`;

    const getAllUsers = await req.client
      .query(selectUsers)
      .then((resp) => resp.rows)
      .catch((e) => {
        req.log.error("erro");
        req.log.error(e);
        return;
      });

    if (getAllUsers) {
      resp.status(200).send(getAllUsers);
    } else {
      resp
        .status(400)
        .send({ message: "Não foi possível, listar os usuários" });
    }
  });
}

module.exports = getAllUsers;
