const {
  selectEpisodesByTitle,
  insertNewEpisodes,
} = require("../../repository/episodes-repository/episodes-repository");
const buildErrorObject = require("../../config/factory-function");

async function createNewEpisodeService(title_eps) {
  const checkingEpisodeExists = await selectEpisodesByTitle(title_eps);

  if (checkingEpisodeExists) {
    console.log("Esse episódio já foi adicionado");
    return buildErrorObject("Esse episódio já foi adicionado");
  } else {
    const insert = await insertNewEpisodes(title_eps);

    if (insert.rowCount > 0) {
      console.log(`Episódio ${title_eps} adicionado com sucesso!`);
      return { message: "Episódio criado" };
    } else {
      console.log("Não foi possível adicionar o episódio");
      return buildErrorObject("Não foi possível adicionar o episódio");
    }
  }
}

module.exports = createNewEpisodeService;
