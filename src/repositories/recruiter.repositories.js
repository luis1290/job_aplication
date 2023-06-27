const { recruiter } = require('../models');

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


module.exports = {
  createRecruiter,
  updateRecruiter,
  deleteRecruiter
}