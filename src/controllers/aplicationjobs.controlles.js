const aplicationJobsServices = require("../services/aplicationjobs.services");


const aplicationJobController = async (req, res, next) => {
  try {
    const dataAplication = req.body
    await aplicationJobsServices.createAplicationServices(dataAplication)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const addInterviewAplicationController = async (req, res, next) => {
  try {
    const { id } = req.params
    const {interview_id} = req.body
    console.log('entra al controlador', id, interview_id)
    await aplicationJobsServices.addInterviewAplicationServices(interview_id, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

module.exports = {
  aplicationJobController,
  addInterviewAplicationController
}