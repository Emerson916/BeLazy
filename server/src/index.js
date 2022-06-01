const log = require("./middleware/logger");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./middleware/db");

const createUser = require("./controllers/users/create-user");
const deleteUser = require("./controllers/users/delete-user");
const getOneUser = require("./controllers/users/get-one-user");
const getAllUsers = require("./controllers/users/get-all-users");
const UpdateUser = require("./controllers/users/update-user");

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(bodyParser.json());
app.use(log());
app.use(db());

createUser(app);
getAllUsers(app);
getOneUser(app);
deleteUser(app);
UpdateUser(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
