const log = require("./middleware/logger");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const createUser = require("./controllers/users-controller/create-user-controller");
const deleteUser = require("./controllers/users-controller/delete-user-controller");
const getOneUser = require("./controllers/users-controller/get-one-user-controller");
const getAllUsers = require("./controllers/users-controller/get-all-users-controller");
const updateUser = require("./controllers/users-controller/update-user-controller");

const createFilm = require("./controllers/players-videos/films-controller/create-film-controller");
const getOneFilm = require("./controllers/players-videos/films-controller/get-one-film-controller");
const getAllFilms = require("./controllers/players-videos/films-controller/get-all-films-controller");
const deleteFilm = require("./controllers/players-videos/films-controller/delete-film-controller");
const updateFilm = require("./controllers/players-videos/films-controller/update-film-controller");

const createAnimeController = require("./controllers/players-videos/anime-controller/create-anime-controller");

const createSeasonController = require("./controllers/season-controller/create-season-controller");

const getOneAnimeController = require("./controllers/players-videos/anime-controller/get-one-anime-controller");

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(bodyParser.json());
app.use(log());

//ROTAS DE USUÁRIO
createUser(app);
getAllUsers(app);
getOneUser(app);
deleteUser(app);
updateUser(app);

//ROTAS DE FILMS
createFilm(app);
getOneFilm(app);
getAllFilms(app);
deleteFilm(app);
updateFilm(app);

//ROTAS DE ANIMES
createAnimeController(app);
getOneAnimeController(app);

//ROTAS DE SEASON
createSeasonController(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
