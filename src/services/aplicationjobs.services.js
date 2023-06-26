const { createAplication, addInterviewAplication } = require("../repositories/aplicationjob.repositories")

class aplicationJobsServices {

  static async createAplicationServices(dataAplication) {
    try {
      const aplication = await createAplication(dataAplication)
      return aplication
    } catch (error) {
      throw error
    }
  }

  static async addInterviewAplicationServices(interview_id, id) {
    try {
      console.log('entra al servicio')
      const aplication = await addInterviewAplication(interview_id, id)
      return aplication;
    } catch (error) {
      throw error
    }

  }

}
module.exports = aplicationJobsServices