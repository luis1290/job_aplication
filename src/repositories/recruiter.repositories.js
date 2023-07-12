const { recruiter, companies } = require('../models');

const createRecruiter = async (dataRecruiter) => {
  const recruite = await recruiter.create(dataRecruiter);
  return recruite;
}

const updateRecruiter = async (dataRecruiter, id) => {
  const recruite = await recruiter.update({ dataRecruiter }, {
    where: { id }
  })
  return recruite
}

const deleteRecruiter = async (id) => {
  const recruite = await recruiter.destroy({
    where: { id }
  })
  return recruite
}

const getRecluters = async () => {
  const user = await recruiter.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: companies,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }
    ]
  })

  return user
}



module.exports = {
  createRecruiter,
  updateRecruiter,
  deleteRecruiter,
  getRecluters
}