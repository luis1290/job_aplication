const recruiterServices = require("../services/recruiters.services");


const createRecruiterController = async (req, res, next) => {
  try {
    const dataRecruiter = req.body
    await recruiterServices.createRecruiterServices(dataRecruiter)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const updateRecruiterController = async (req, res, next) => {
  try {
    const { id } = req.params
    const dataRecruiter = req.body
    await recruiterServices.updateRecruiterServices(dataRecruiter, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const deleteRecruiterController = async (req, res, next) => {
  try {
    const {id} = req.params
    await recruiterServices.deleteRecruiterServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createRecruiterController,
  updateRecruiterController,
  deleteRecruiterController
}