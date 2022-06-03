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
  season_id,
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
    season_id,
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
    season_id,
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

// async function getFilmById(id) {
//   const selectFilmById = `SELECT
//   id,
//   imageCard,
//   imageBanner,
//   title_video,
//   evaluation,
//   favorite,
//   releaseYear,
//   createAt,
//   duration,
//   sinopse FROM films WHERE id = $1`;
//   const value = [id];

//   try {
//     const query = await postgresConnection.query(selectFilmById, value);
//     return query.rows;
//   } catch (error) {
//     console.log("CONSOLE LOG DO ERRO GET-FILM-BY-ID ======> ", error);
//   } finally {
//     postgresConnection.release;
//   }
// }

// async function getAllFilms() {
//   const selectFilms = `SELECT
//   id,
//   imageCard,
//   imageBanner,
//   title_video,
//   evaluation,
//   favorite,
//   releaseYear,
//   createAt,
//   duration,
//   sinopse FROM films`;

//   try {
//     const query = await postgresConnection.query(selectFilms);
//     return query.rows;
//   } catch (error) {
//     console.log("CONSOLE LOG DO ERRO GET-ALL-FILMS ======> ", error);
//   } finally {
//     postgresConnection.release;
//   }
// }

// async function deleteFilmById(id) {
//   const deleteFilm = `DELETE FROM films WHERE id = $1`;
//   const value = [id];

//   try {
//     const query = await postgresConnection.query(deleteFilm, value);
//     console.log("##############################");
//     console.log("# FILME DELETADO COM SUCESSO #");
//     console.log("##############################");
//     return query;
//   } catch (error) {
//     console.log("DELETE ERROR", error);
//   } finally {
//     postgresConnection.release;
//   }
// }

// async function updateFilmById(dataFilm, id) {
//   const updateById = `UPDATE films SET (
//     imageCard,
//     imageBanner,
//     title_video,
//     evaluation,
//     favorite,
//     releaseYear,
//     createAt,
//     duration,
//     sinopse) = ($1, $2, $3, $4, $5, $6, $7, $8, $9) WHERE id = $10`;
//   const values = [
//     dataFilm.imageCard,
//     dataFilm.imageBanner,
//     dataFilm.title_video,
//     dataFilm.evaluation,
//     dataFilm.favorite,
//     dataFilm.releaseYear,
//     dataFilm.createAt,
//     dataFilm.duration,
//     dataFilm.sinopse,
//     id,
//   ];

//   try {
//     const query = await postgresConnection.query(updateById, values);
//     console.log("################################");
//     console.log("# FILME ATUALIZADO COM SUCESSO #");
//     console.log("################################");
//     return query.rows;
//   } catch (error) {
//     console.log("CONSOLE LOG DO ERRO UPDATE ======> ", error);
//   } finally {
//     postgresConnection.release;
//   }
// }

module.exports = {
  selectAnimeByTitle,
  insertNewAnime,
  //   getAnimeById,
  //   getAllAnime,
  //   deleteAnimeById,
  //   updateAnimeById,
};
