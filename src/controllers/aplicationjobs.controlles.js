const aplicationJobsServices = require("../services/aplicationjobs.services");


const createAplicationJobController = async (req, res, next) => {
  try {
    const dataAplication = req.body
    await aplicationJobsServices.createAplicationServices(dataAplication)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const updateAplicatioJobController = async (req, res, next) => {
  try {
    const { id } = req.params
    const dataAplication = req.body
    await aplicationJobsServices.updateAplicationServices(dataAplication, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const deleteAplicationJobController = async (req, res, next) => {
  try {
    const { id } = req.params
    await aplicationJobsServices.deleteAplicationServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};


module.exports = {
  createAplicationJobController,
  updateAplicatioJobController,
  deleteAplicationJobController
}