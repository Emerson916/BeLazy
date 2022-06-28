const postgresConnection = require("../../config/postgresConnection");

async function selectSeasonByNumberSeasonAndId_series(id_series, number_season) {
  const selectSeason = `SELECT id_series, number_season FROM season WHERE id_series = $1 AND number_season = $2`;
  const value = [id_series, number_season];

  try {
    const query = await postgresConnection.query(selectSeason, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewSeason(id_series, number_season, imageCard, episodes) {
  const insertSeason = `INSERT INTO season (id_series, number_season, imageCard, episodes) VALUES ($1, $2, $3, $4)`;
  const values = [id_series, number_season, imageCard, episodes];

  try {
    const query = await postgresConnection.query(insertSeason, values);
    console.log("################################");
    console.log("# TEMPORADA CRIADO COM SUCESSO #");
    console.log("################################");
    return query.rowCount;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectSeasonByNumberSeasonAndId_series,
  insertNewSeason,
};
