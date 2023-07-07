const { createCompani, updateCompany, deleteCompany, getCompanyRecruiter, getAllCompany } = require("../repositories/companies.repository");

class companiesServices {

  static async addCompanyServices(dataCompany) {
    try {
      const company = await createCompani(dataCompany);
      return company;
    } catch (error) {
      throw error
    }
  }
  static async updateCompanyServices(dataCompany, id) {
    try {
      return await updateCompany(dataCompany, id)
    } catch (error) {
      throw error
    }
  }
  static async deleteCompanyServices(id) {
    try {
      return await deleteCompany(id)
    } catch (error) {
      throw error
    }
  }
  static async getCompanyRecluiterServices(id) {
    try {
      return await getCompanyRecruiter(id)
    } catch (error) {
      throw error
    }
  }
  static async  getAllComaniesServices() {
    try {
      return await getAllCompany();
    } catch (error) {
      throw error
    }
  }
}
module.exports = companiesServices