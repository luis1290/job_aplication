
const { createInterview, addInterviewAplication } = require("../repositories/interviews.repositories")

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

}
module.exports = InterviewServices