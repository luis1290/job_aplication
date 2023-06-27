const { createAplication, updateAplication, deleteAplication } = require("../repositories/aplicationjob.repositories")

class aplicationJobsServices {

  static async createAplicationServices(dataAplication) {
    try {
      const aplication = await createAplication(dataAplication)
      return aplication
    } catch (error) {
      throw error
    }
  }

  static async updateAplicationServices(dataAplication, id) {
    try {
      const aplication = await updateAplication(dataAplication, id)
      return aplication
    } catch (error) {
      throw error
    }
  }

  static async deleteAplicationServices(id) {
    try {
      const aplication = await deleteAplication(id)
      return aplication
    } catch (error) {
      throw error
    }
  }

}
module.exports = aplicationJobsServices