const { recruiter } = require('../models');

const createRecruiter = async (dataRecruiter) => {
  const company = await recruiter.create(dataRecruiter);
  return company;
}

module.exports ={
  createRecruiter
}