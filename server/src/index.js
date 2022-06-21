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

//IMPORTS DAS ROTAS DE ANIMES
const createAnimeController = require("./controllers/players-videos/anime-controller/create-anime-controller");
const getOneAnimeController = require("./controllers/players-videos/anime-controller/get-one-anime-controller");
const getAllAnimeController = require("./controllers/players-videos/anime-controller/get-all-anime-controller");
const deleteAnimeController = require("./controllers/players-videos/anime-controller/delete-anime-controller");
const updateAnimeController = require("./controllers/players-videos/anime-controller/update-anime-controller");

//IMPORTS DAS ROTAS DE TEMPORADAS
const createSeasonController = require("./controllers/season-controller/create-season-controller");

const PORT = parseInt(process.env.PORT ?? process.env.port ?? "3000");

app.use(cors());

app.use(bodyParser.json());
app.use(log());

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

//ROTAS DE ANIMES
createAnimeController(app);
getOneAnimeController(app);
getAllAnimeController(app);
deleteAnimeController(app);
updateAnimeController(app);

//ROTAS DE SEASON
createSeasonController(app);

app.listen(PORT, () => {
  console.log("Aplicação rodando na porta", PORT);
});
