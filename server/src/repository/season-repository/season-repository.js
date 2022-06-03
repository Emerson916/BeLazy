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

async function insertNewSeason(episodes_id, number_season, imageCard) {
  const insertSeason = `INSERT INTO season (episodes_id, number_season, imageCard) VALUES ($1, $2, $3)`;
  const values = [episodes_id, number_season, imageCard];

  try {
    const query = await postgresConnection.query(insertSeason, values);
    console.log("################################");
    console.log("# TEMPORADA CRIADO COM SUCESSO #");
    console.log("################################");
    return query;
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