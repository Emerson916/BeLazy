const postgresConnection = require("../../../config/postgresConnection");

async function selectSerieByTitle(title_video) {
  const selectSerie = `SELECT (
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse,
    type_video,
    season
    ) FROM series WHERE title_video = $1`;
  const value = [title_video];

  try {
    const query = await postgresConnection.query(selectSerie, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewSerie(
  //Parâmetros da função
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse,
  type_video,
  season
) {
  //Insert de Series
  const insertSerie = `INSERT INTO series (
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse,
    type_video,
    season

    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

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
    type_video,
    season,
  ];

  try {
    const query = await postgresConnection.query(insertSerie, values);
    console.log("############################");
    console.log("# SÉRIE CRIADO COM SUCESSO #");
    console.log("############################");
    return query;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getSerieById(id) {
  const selectSerieById = `SELECT id, imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse ,type_video, season
  FROM series WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(selectSerieById, value);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-SERIE-BY-ID ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getAllSerie() {
  const selectSerie = `SELECT id, imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse, type_video, season FROM series`;

  try {
    const query = await postgresConnection.query(selectSerie);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-ALL-SERIE ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function deleteSerieSeasonById_Serie(id) {
  const deleteById_Serie = `DELETE FROM season WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteById_Serie, value);
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

async function deleteSerieById(id) {
  const deleteSerie = `DELETE FROM series WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteSerie, value);
    console.log("##############################");
    console.log("# SÉRIE DELETADO COM SUCESSO #");
    console.log("##############################");
    return query;
  } catch (error) {
    console.log("DELETE ERROR", error);
  } finally {
    postgresConnection.release;
  }
}

async function updateSerieById(dataSerie, id) {
  const updateById = `UPDATE series SET (imageCard, imageBanner, title_video, evaluation, favorite, releaseYear, createAt, sinopse, type_video, season
    ) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) WHERE id = $11`;
  const values = [
    dataSerie.imageCard,
    dataSerie.imageBanner,
    dataSerie.title_video,
    dataSerie.evaluation,
    dataSerie.favorite,
    dataSerie.releaseYear,
    dataSerie.createAt,
    dataSerie.sinopse,
    dataSerie.type_video,
    dataSerie.season,
    id,
  ];

  try {
    const query = await postgresConnection.query(updateById, values);
    console.log("################################");
    console.log("# SERIE ATUALIZADO COM SUCESSO #");
    console.log("################################");
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO UPDATE ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectSerieByTitle,
  insertNewSerie,
  getSerieById,
  getAllSerie,
  deleteSerieSeasonById_Serie,
  deleteSerieById,
  updateSerieById,
};
