const postgresConnection = require("../../config/postgresConnection");

async function selectUserByNumberSeason(number_season) {
  const selectSeason = `SELECT number_season FROM season WHERE number_season = $1`;
  const value = [number_season];

  try {
    const query = await postgresConnection.query(selectSeason, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewSeason(id_anime, number_season, imageCard, episodes) {
  const insertSeason = `INSERT INTO season (id_anime, number_season, imageCard, episodes) VALUES ($1, $2, $3, $4)`;
  const values = [id_anime, number_season, imageCard, episodes];

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
  selectUserByNumberSeason,
  insertNewSeason,
};
