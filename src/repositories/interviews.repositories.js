const { interviews } = require('../models');

const createInterview = async (dataInterview) => {
  const company = await interviews.create(dataInterview);
  return company;
}

const addInterviewAplication = async (aplication_job_id, id) => {
  console.log('entra al repository')
  const aplication = await interviews.update({ aplication_job_id: aplication_job_id }, {
    where: {
      id
    }
  })
  return aplication
}





module.exports = {
  createInterview,
  addInterviewAplication
}