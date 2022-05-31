function deleteUser(app) {
  app.delete("/v1/users/:id", async (req, resp) => {
    const { id } = req.params;

    const deleteUser = `DELETE FROM users WHERE id = $1`;
    const value = [id];

    const deleteUserExisting = await req.client
      .query(deleteUser, value)
      .then((resp) => resp.rows)
      .catch((e) => {
        req.log.error("erro");
        req.log.error(e);
        return;
      });

    if (deleteUserExisting) {
      resp.status(200).send({});
    } else {
      resp.status(400).send({ message: "Não foi possível, deletar o usuário" });
    }
  });
}

module.exports = deleteUser;
