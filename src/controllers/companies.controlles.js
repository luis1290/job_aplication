const companiesServices = require("../services/companies.services");

const createCompanyController = async (req, res, next) => {
  try {
    const dataCompany = req.body
    await companiesServices.addCompanyServices(dataCompany);
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createCompanyController
}