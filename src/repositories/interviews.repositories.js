const { interviews } = require('../models');

const createInterview = async (dataInterview) => {
  const company = await interviews.create(dataInterview);
  return company;
}





module.exports = {
  createInterview
}