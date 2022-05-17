const log = require("./middleware/logger");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

const createUser = require("./endpoints/users/create-user");
app.use(bodyParser.json());
app.use(log());

createUser(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
