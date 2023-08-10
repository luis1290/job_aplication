const { users, aplicatio_jobs, interviews, companies } = require('../models');

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

const updateUser = async (dataUser, id) => {
  const user = await users.update({
    name: dataUser.name,
    url_avatar: dataUser.url_avatar,
    avatar: dataUser.avatar
  }, {
    where: { id }
  })
  return user;
}

const validateUser = async (id) => {
  const user = await users.update({
    validate_user: true
  }, {
    where: { id }
  })
  return user;
}


const getAplicationByUserId = async (id) => {
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: aplicatio_jobs,
        attributes: { exclude: ["createdAt", "updatedAt", "company_id"] },
        include: [
          {
            model: companies,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: interviews,
            attributes: { exclude: ["createdAt", "updatedAt", "aplication_job_id"] },
          }
        ]
      }
    ]
  })
  return user
}

const getInterviewByUserId = async (id) => {
  const user = await users.findByPk(id, {
    attributes: { exclude: ["password", "avatar", "url_avatar", "validate_user", "createdAt", "updatedAt"] },
    include: [
      {
        model: interviews
      }
    ]
  })

  return user
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getAplicationByUserId,
  getInterviewByUserId,
  validateUser
}