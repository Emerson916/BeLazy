const postgresConnection = require("../../config/postgresConnection");

async function selectEpisodesByTitle(title_eps) {
  const selectEpisodes = `SELECT (title_eps) FROM episodes WHERE title_eps = $1`;
  const value = [title_eps];

  try {
    const query = await postgresConnection.query(selectEpisodes, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewEpisodes(title_eps) {
  const insertEpisodes = `INSERT INTO episodes (title_eps) VALUES ($1)`;
  const values = [title_eps];

  try {
    const query = await postgresConnection.query(insertEpisodes, values);
    console.log("###############################");
    console.log("# EPISÓDIO CRIADO COM SUCESSO #");
    console.log("###############################");
    return query;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectEpisodesByTitle,
  insertNewEpisodes,
};
