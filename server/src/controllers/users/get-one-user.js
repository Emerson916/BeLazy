function getOneUser(app) {
  app.get("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;

    const selectUserById = `SELECT id, email, name, last_login FROM users WHERE id = $1`;
    const value = [id];

    const getOneUser = await req.client
      .query(selectUserById, value)
      .then((resp) => resp.rows)
      .catch((e) => {
        req.log.error("erro");
        req.log.error(e);
        return;
      });

    if (getOneUser) {
      resp.status(200).send(getOneUser);
    } else {
      resp
        .status(400)
        .send({ message: "Não foi possível, listar os usuários" });
    }
  });
}

module.exports = getOneUser;
