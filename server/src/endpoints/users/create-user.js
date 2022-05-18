function createUser(app) {
  app.post("v1/users", async (req, resp) => {
    const {} = req.body;

    if (!email || !password || !username){
        resp.status(400).send({
            msg: "Preencha os campos!!"
        });
    }else {
        
    }
  });
}

module.exports = createUser;