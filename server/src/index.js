const log = require("./middleware/logger");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const createUser = require("./controllers/users/create-user");
const deleteUser = require("./controllers/users/delete-user");
const getOneUser = require("./controllers/users/get-one-user");
const getAllUsers = require("./controllers/users/get-all-users");
const updateUser = require("./controllers/users/update-user");

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(bodyParser.json());
app.use(log());

createUser(app);
getAllUsers(app);
getOneUser(app);
deleteUser(app);
updateUser(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
