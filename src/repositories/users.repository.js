const { users, aplicatio_jobs } = require('../models');

const createUser = async (newUser) => {
  const user = await users.create(newUser);
  return user;
}

const loginUser = async (email) => {
  const user = await users.findOne({
    where: { email }
  });
  return user;
}

const updateUser = async (name, id) => {
  const user = await users.update({
    name: name
  }, {
    where: { id }
  })
  return user;
}


const getAplicationByUserId = async (id) => {
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "url_avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: aplicatio_jobs,
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    ]
  })
  return user
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getAplicationByUserId
}