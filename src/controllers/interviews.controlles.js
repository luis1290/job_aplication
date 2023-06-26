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

module.exports = {
  createInterviewController
}