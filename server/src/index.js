const log = require("./middleware/logger");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

//IMPORTS DAS ROTAS DO USUÁRIO
const createUserController = require("./controllers/users-controller/create-user-controller");
const getAllUsersController = require("./controllers/users-controller/get-all-users-controller");
const getOneUserController = require("./controllers/users-controller/get-one-user-controller");
const deleteUserController = require("./controllers/users-controller/delete-user-controller");
const updateUserController = require("./controllers/users-controller/update-user-controller");

//IMPORTS DAS ROTAS DE FILMS
const createFilmController = require("./controllers/players-videos/films-controller/create-film-controller");
const getOneFilmController = require("./controllers/players-videos/films-controller/get-one-film-controller");
const getAllFilmsController = require("./controllers/players-videos/films-controller/get-all-films-controller");
const deleteFilmController = require("./controllers/players-videos/films-controller/delete-film-controller");
const updateFilmController = require("./controllers/players-videos/films-controller/update-film-controller");

//IMPORTS DAS ROTAS DE SERIES
const createSeriesController = require("./controllers/players-videos/series-controller/create-serie-controller");
const getOneSeriesController = require("./controllers/players-videos/series-controller/get-one-serie-controller");
const getAllSeriesController = require("./controllers/players-videos/series-controller/get-all-series-controller");
const deleteSeriesController = require("./controllers/players-videos/series-controller/delete-serie-controller");
const updateSeriesController = require("./controllers/players-videos/series-controller/update-serie-controller");
const authenticate = require("./controllers/auth");

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(cors());

app.use(bodyParser.json());
app.use(log());

//ROTA DE AUTENTICAÇÂO
authenticate(app)

//ROTAS DE USUÁRIO
createUserController(app);
getAllUsersController(app);
getOneUserController(app);
deleteUserController(app);
updateUserController(app);

//ROTAS DE FILMS
createFilmController(app);
getOneFilmController(app);
getAllFilmsController(app);
deleteFilmController(app);
updateFilmController(app);

//ROTAS DE SERIES
createSeriesController(app);
getOneSeriesController(app);
getAllSeriesController(app);
deleteSeriesController(app);
updateSeriesController(app);


app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
