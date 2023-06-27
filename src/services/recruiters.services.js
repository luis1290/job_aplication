const { createRecruiter, updateRecruiter, deleteRecruiter } = require("../repositories/recruiter.repositories")

class recruiterServices {
  static async createRecruiterServices(dataRecruiter) {
    try {
      return await createRecruiter(dataRecruiter)
    } catch (error) {
      throw error
    }
  }

  static async updateRecruiterServices(dataRecruiter, id) {
    try {
      return await updateRecruiter(dataRecruiter, id)
    } catch (error) {
      throw error
    }
  }

  static async deleteRecruiterServices(id) {
    try {
      return await deleteRecruiter(id)
    } catch (error) {
      throw error
    }
  }
}
module.exports = recruiterServices