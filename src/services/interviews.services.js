const { createInterview } = require("../repositories/interviews.repositories")

class InterviewServices {

  static async creatNewInterviews(dataIntervies) {
    try {
      return await createInterview(dataIntervies)
    } catch (error) {
      throw error
    }
  }

}
module.exports = InterviewServices