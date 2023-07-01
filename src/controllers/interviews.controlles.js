const InterviewServices = require("../services/interviews.services");

const createInterviewController = async (req, res, next) => {
  try {
    const dataInterview = req.body
    await InterviewServices.creatNewInterviews(dataInterview)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const addInterviewAplicationController = async (req, res, next) => {
  try {
    const { id } = req.params
    const { aplication_job_id } = req.body

    await InterviewServices.addInterviewAplicationServices(aplication_job_id, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const updateInterviewsController = async (req, res, next) => {
  try {
    const { id } = req.params
    const dataIntervies = req.body
    await InterviewServices.updateInterviewServices(dataIntervies, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const deleteInterviewsController = async (req, res, next) => {
  try {
    const {id} = req.params
    await InterviewServices.deleteInterviewServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createInterviewController,
  addInterviewAplicationController,
  updateInterviewsController,
  deleteInterviewsController
}