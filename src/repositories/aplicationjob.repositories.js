const { aplicatio_jobs } = require('../models');

const createAplication = async (dataAplication) => {
  const aplication = await aplicatio_jobs.create(dataAplication);
  return aplication;
}

const addInterviewAplication = async (interview_id, id) => {
  console.log('entra al repository')
  const aplication = await aplicatio_jobs.update({ interview_id: interview_id }, {
    where: {
      id
    }
  })
  return aplication
}



module.exports = {
  createAplication,
  addInterviewAplication
}