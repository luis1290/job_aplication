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



module.exports = {
  aplicationJobController
}