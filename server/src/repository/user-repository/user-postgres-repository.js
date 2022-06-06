const postgresConnection = require("../../config/postgresConnection");

async function selectUserByEmail(email) {
  const selectUser = `SELECT email FROM users WHERE email = $1`;
  const value = [email];

  try {
    const query = await postgresConnection.query(selectUser, value);
    return query.rows[0];
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO SELECT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function insertNewUser(email, hashPassword, username) {
  const insertUser = `INSERT INTO users (email, password, name) VALUES ($1, $2, $3)`;
  const values = [email, hashPassword, username];

  try {
    const query = await postgresConnection.query(insertUser, values);
    console.log("##############################");
    console.log("# USUÁRIO CRIADO COM SUCESSO #");
    console.log("##############################");
    return query;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO INSERT ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function getAllUsers() {
  const selectUsers = `SELECT id, email, name, last_login FROM users`;

  try {
    const query = await postgresConnection.query(selectUsers);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-ALL-USERS ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function deleteUserById(id) {
  const deleteUser = `DELETE FROM users WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(deleteUser, value);
    console.log("################################");
    console.log("# USUÁRIO DELETADO COM SUCESSO #");
    console.log("################################");
    return query;
  } catch (error) {
    console.log("DELETE ERROR", error);
  } finally {
    postgresConnection.release;
  }
}

async function getUserById(id) {
  const selectUserById = `SELECT id, email, name, last_login FROM users WHERE id = $1`;
  const value = [id];

  try {
    const query = await postgresConnection.query(selectUserById, value);
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO GET-USER-BY-ID ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

async function updateUserById(dataUser, id) {
  const updateById = `UPDATE users SET (email, password, name) = ($1, $2, $3) WHERE id = $4`;
  const values = [dataUser.email, dataUser.password, dataUser.username, id];

  try {
    const query = await postgresConnection.query(updateById, values);
    console.log("##################################");
    console.log("# USUÁRIO ATUALIZADO COM SUCESSO #");
    console.log("##################################");
    return query.rows;
  } catch (error) {
    console.log("CONSOLE LOG DO ERRO UPDATE ======> ", error);
  } finally {
    postgresConnection.release;
  }
}

module.exports = {
  selectUserByEmail,
  insertNewUser,
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById,
};
