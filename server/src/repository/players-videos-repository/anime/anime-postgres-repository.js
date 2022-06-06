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
  const selectAnimeById = `SELECT * FROM animes WHERE id = $1`;
  // id, season_id, imageCard, imageBanner, title_video, evaluation,
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

module.exports = {
  selectAnimeByTitle,
  insertNewAnime,
  getAnimeById,
};
