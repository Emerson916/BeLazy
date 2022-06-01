function UpdateUser(app) {
  app.put("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;
    const { email, password, username } = req.body;

    const updateById = `UPDATE users SET (email, password, name) = ($1, $2, $3) WHERE id = $4`;
    const values = [email, password, username, id];

    const updateUser = await req.client
      .query(updateById, values)
      .then((resp) => resp.rows)
      .catch((e) => {
        req.log.error("erro");
        req.log.error(e);
        return;
      });

    if (updateUser) {
      resp.status(200).send(updateUser);
    } else {
      resp
        .status(400)
        .send({ message: "Não foi possível alterar os usuários" });
    }
  });
}

module.exports = UpdateUser;
