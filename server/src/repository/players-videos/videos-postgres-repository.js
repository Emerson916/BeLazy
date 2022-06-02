const postgresConnection = require("../../config/postgresConnection");

async function selectFilmByTitle(title_video) {
  const selectUser = `SELECT (
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
    const query = await postgresConnection.query(selectUser, value);
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
  const insertUser = `INSERT INTO films (
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
    const query = await postgresConnection.query(insertUser, values);
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

module.exports = {
  selectFilmByTitle,
  insertNewFilm,
};
