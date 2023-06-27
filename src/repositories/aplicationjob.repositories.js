const { aplicatio_jobs } = require('../models');

const createAplication = async (dataAplication) => {
  const aplication = await aplicatio_jobs.create(dataAplication);
  return aplication;
}





module.exports = {
  createAplication,
}