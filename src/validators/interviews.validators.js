const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createInterviewsValidator = [
  check("date_interview", "Error con el campo username")
    .exists()
    .withMessage("date_interview es obligatorio")
    .notEmpty()
    .withMessage("date_interview no debe estar vacio")
    .isDate()
    .withMessage("El campo date_interview debe de fecha"),
  check("time_interview", "Error con el campo username")
    .exists()
    .withMessage("time_interview es obligatorio")
    .notEmpty()
    .withMessage("time_interview no debe estar vacio")
    .isTime()
    .withMessage("El campo time_interview debe ser una hora"),
  validateResult
];

const updateInterviewsValidator = [
  check("date_interview", "Error con el campo username")
    .exists()
    .withMessage("date_interview es obligatorio")
    .notEmpty()
    .withMessage("date_interview no debe estar vacio")
    .isDate()
    .withMessage("El campo date_interview debe de fecha"),
  check("time_interview", "Error con el campo username")
    .exists()
    .withMessage("time_interview es obligatorio")
    .notEmpty()
    .withMessage("time_interview no debe estar vacio")
    .isTime()
    .withMessage("El campo time_interview debe ser una hora"),
  validateResult
];

module.exports = {
  createInterviewsValidator,
  updateInterviewsValidator
}