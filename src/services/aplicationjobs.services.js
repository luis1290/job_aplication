const { createAplication } = require("../repositories/aplicationjob.repositories")

class aplicationJobsServices {

  static async createAplicationServices(dataAplication) {
    try {
      const aplication = await createAplication(dataAplication)
      return aplication
    } catch (error) {
      throw error
    }
  }

}
module.exports = aplicationJobsServices