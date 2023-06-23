const { createCompani } = require("../repositories/companies.repository");

class companiesServices {

  static async  addCompanyServices(dataCompany) {
    try {
      const company = await createCompani(dataCompany);
      return company;
    } catch (error) {
      throw error
    }
  }

}
module.exports = companiesServices