const postgresConnection = require("../../../config/postgresConnection");

async function selectAnimeByTitle(title_video) {
  const selectAnime = `SELECT (
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse
    ) FROM animes WHERE title_video = $1`;
  const value = [title_video];

  try {
    const query = await postgresConnection.query(selectAnime, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewAnime(
  //Parâmetros da função
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse
) {
  //Insert de Animes
  const insertAnime = `INSERT INTO animes (
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

  //Parâmetros passados para o insert de films
  const values = [
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse,
  ];

  try {
    const query = await postgresConnection.query(insertAnime, values);
    console.log("############################");
    console.log("# ANIME CRIADO COM SUCESSO #");
    console.log("############################");
    return query;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getAnimeById(id) {
  const selectAnimeById = `SELECT id, imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse FROM animes WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(selectAnimeById, value);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-ANIME-BY-ID ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getAllAnime() {
  const selectAnime = `SELECT id, imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse FROM animes`;

  try {
    const query = await postgresConnection.query(selectAnime);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-ALL-Anime ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function deleteAnimeSeasonById_anime(id) {
  const deleteById_anime = `DELETE FROM season WHERE id_anime = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteById_anime, value);
    console.log("########################################");
    console.log("# DADOS DA SEASON DELETADO COM SUCESSO #");
    console.log("########################################");
    return query;
  } catch (error) {
    console.log("DELETE ERROR", error);
  } finally {
    postgresConnection.release;
  }
}

async function deleteAnimeById(id) {
  const deleteAnime = `DELETE FROM animes WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteAnime, value);
    console.log("##############################");
    console.log("# ANIME DELETADO COM SUCESSO #");
    console.log("##############################");
    return query;
  } catch (error) {
    console.log("DELETE ERROR", error);
  } finally {
    postgresConnection.release;
  }
}

async function updateAnimeById(dataAnime, id) {
  const updateById = `UPDATE animes SET (imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id = $9`;
  const values = [
    dataAnime.imageCard,
    dataAnime.imageBanner,
    dataAnime.title_video,
    dataAnime.evaluation,
    dataAnime.favorite,
    dataAnime.releaseYear,
    dataAnime.createAt,
    dataAnime.sinopse,
    id,
  ];

  try {
    const query = await postgresConnection.query(updateById, values);
    console.log("################################");
    console.log("# ANIME ATUALIZADO COM SUCESSO #");
    console.log("################################");
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO UPDATE ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectAnimeByTitle,
  insertNewAnime,
  getAnimeById,
  getAllAnime,
  deleteAnimeSeasonById_anime,
  deleteAnimeById,
  updateAnimeById,
};
