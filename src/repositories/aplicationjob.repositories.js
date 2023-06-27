const { aplicatio_jobs } = require('../models');

const createAplication = async (dataAplication) => {
  const aplication = await aplicatio_jobs.create(dataAplication);
  return aplication;
}

const updateAplication = async (dataAplication, id) => {
  const aplication = await aplicatio_jobs.update({ dataAplication },
    {
      where: { id }
    })
  return aplication
}

const deleteAplication = async (id) => {
  const aplication = await aplicatio_jobs.destroy({
    where: { id }
  })
  return aplication
}


module.exports = {
  createAplication,
  updateAplication,
  deleteAplication
}