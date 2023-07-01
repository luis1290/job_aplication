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

const updateCompanyController = async (req, res, next) => {
  try {
    const { id } = req.params
    const dataCompany = req.body
    await companiesServices.updateCompanyServices(dataCompany, id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const deleteCompanyController = async (req, res, next) => {
  try {
    const { id } = req.params
    await companiesServices.deleteCompanyServices(id)
    res.status(201).send()
  } catch (error) {
    next(error)
  }
};

const getCompanyRecluiterController = async (req, res, next) => {
  try {
    const { id } = req.params
    const company = await companiesServices.getCompanyRecluiterServices(id)
    res.json(company);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createCompanyController,
  updateCompanyController,
  deleteCompanyController,
  getCompanyRecluiterController
}