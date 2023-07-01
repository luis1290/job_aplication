const { companies, recruiter } = require('../models');

const createCompani = async (dataCompany) => {
  const company = await companies.create(dataCompany);
  return company;
}

const updateCompany = async (dataCompany, id) => {
  const company = await companies.update( dataCompany , {
    where: { id }
  })
  return company
}

const deleteCompany = async (id) => {
  const company = await companies.destroy({
    where: { id }
  })
  return company
}

const getCompanyRecruiter = async (id) => {
  const company = await companies.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: recruiter,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      }
    ]
  })
  return company
}

module.exports = {
  createCompani,
  updateCompany,
  deleteCompany,
  getCompanyRecruiter
}