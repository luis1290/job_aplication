const { companies } = require('../models');

const createCompani = async (dataCompany) => {
  const company = await companies.create(dataCompany);
  return company;
}

module.exports ={
  createCompani
}