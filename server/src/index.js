const log = require("./middleware/logger");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const createUser = require("./controllers/users/create-user-controller");
const deleteUser = require("./controllers/users/delete-user-controller");
const getOneUser = require("./controllers/users/get-one-user-controller");
const getAllUsers = require("./controllers/users/get-all-users-controller");
const updateUser = require("./controllers/users/update-user-controller");

const createFilm = require("./controllers/players-videos/films-controller/create-film-controller");
const getOneFilm = require("./controllers/players-videos/films-controller/get-one-film-controller");
const getAllFilms = require("./controllers/players-videos/films-controller/get-all-films-controller");
const deleteFilm = require("./controllers/players-videos/films-controller/delete-film-controller");
const updateFilm = require("./controllers/players-videos/films-controller/update-film-controller");

const createAnimeController = require("./controllers/players-videos/anime-controller/create-anime-controller");
const createEpisodeController = require("./controllers/episodes-controller/create-episodes-controller");
const createSeasonController = require("./controllers/season-controller/create-season-controller");

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

//ROTAS DE EPISÓDIOS
createEpisodeController(app);

//ROTAS DE SEASON
createSeasonController(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
