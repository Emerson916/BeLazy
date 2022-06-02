const postgresConnection = require("../../config/postgresConnection");

async function selectFilmByTitle(title_video) {
  const selectFilm = `SELECT (
    user_id,
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse
    ) FROM films WHERE title_video = $1`;
  const value = [title_video];

  try {
    const query = await postgresConnection.query(selectFilm, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewFilm(
  //Parâmetros da função
  user_id,
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse
) {
  //Insert de films
  const insertFilm = `INSERT INTO films (
    user_id,
    imageCard,
    imageBanner,
    title_video,
    evaluation,
    favorite,
    releaseYear,
    createAt,
    sinopse
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

  //Parâmetros passados para o insert de films
  const values = [
    user_id,
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
    const query = await postgresConnection.query(insertFilm, values);
    console.log("##############################");
    console.log("# VIDEO CRIADO COM SUCESSO #");
    console.log("##############################");
    return query;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getFilmById(id) {
  const selectFilmById = `SELECT
  id,
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse FROM films WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(selectFilmById, value);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-FILM-BY-ID ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getAllFilms() {
  const selectFilms = `SELECT 
  id,
  imageCard,
  imageBanner,
  title_video,
  evaluation,
  favorite,
  releaseYear,
  createAt,
  sinopse FROM films`;

  try {
    const query = await postgresConnection.query(selectFilms);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-ALL-FILMS ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function deleteFilmById(id) {
  const deleteFilm = `DELETE FROM films WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteFilm, value);
    console.log("################################");
    console.log("# FILM DELETADO COM SUCESSO #");
    console.log("################################");
    return query;
  } catch (error) {
    console.log("DELETE ERROR", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectFilmByTitle,
  insertNewFilm,
  getFilmById,
  getAllFilms,
  deleteFilmById
};
