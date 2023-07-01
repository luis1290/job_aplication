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

const updateInterview = async (dataInterview, id) => {
  const interview = await interviews.update(dataInterview, {
    where: { id }
  })
  return interview
}

const confirmInterview = async (dataInterview, id) => {
  const interview = await interviews.update(dataInterview, {
    where: { id }
  })
  return interview
}

const deleteInterview = async (id) => {
  const interview = await interviews.destroy({
    where: { id }
  })
  return interview
}






module.exports = {
  createInterview,
  addInterviewAplication,
  updateInterview,
  deleteInterview,
  confirmInterview
}