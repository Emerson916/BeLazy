const postgresConnection = require("../../config/postgresConnection");

async function selectSeasonByNumberSeasonAndId_title(id_title, number_season) {
  const selectSeason = `SELECT id_title, number_season FROM season WHERE id_title = $1 AND number_season = $2`;
  const value = [id_title, number_season];

  try {
    const query = await postgresConnection.query(selectSeason, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewSeason(id_title, number_season, episodes) {
  const insertSeason = `INSERT INTO season (id_title, number_season, episodes) VALUES ($1, $2, $3)`;
  const values = [id_title, number_season, episodes];

  try {
    const query = await postgresConnection.query(insertSeason, values);
    console.log("################################");
    console.log("# TEMPORADA CRIADO COM SUCESSO #");
    console.log("################################");
    return query.rowCount;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT DA SEASON ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectSeasonByNumberSeasonAndId_title,
  insertNewSeason,
};
