const {
  updateUserById,
  getUserById,
} = require("../../repository/user-repository/postgres-repository");
const buildErrorObject = require("../../config/factory-function");
const sha1 = require("sha1");

async function updateUserService(dataUser, id) {
    if (dataUser.password) {
        dataUser.password = sha1(dataUser.password);
      }
      try {
        const update = await updateUserById(dataUser, id);
        if (!update) {
          return buildErrorObject('Não foi possível fazer as alterações');
        } else {
          return await getUserById(id);
        }
      } catch (error) {
        return buildErrorObject('Email já existe, coloque outro');
      }
}

module.exports = updateUserService;
