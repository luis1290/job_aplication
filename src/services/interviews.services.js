
const { createInterview, addInterviewAplication, updateInterview, deleteInterview } = require("../repositories/interviews.repositories")

class InterviewServices {

  static async creatNewInterviews(dataIntervies) {
    try {
      return await createInterview(dataIntervies)
    } catch (error) {
      throw error
    }
  }

  static async addInterviewAplicationServices(aplication_job_id, id) {
    try {
      const aplication = await addInterviewAplication(aplication_job_id, id)
      return aplication;
    } catch (error) {
      throw error
    }

  }

  static async updateInterviewServices(dataIntervies, id) {
    try {
      return await updateInterview(dataIntervies, id)
    } catch (error) {
      throw error
    }
  }
  static async deleteInterviewServices(id) {
    try {
      return await deleteInterview(id)
    } catch (error) {
      throw error
    }
  }

}
module.exports = InterviewServices