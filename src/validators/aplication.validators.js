const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createAplicationValidator = [
  check("name", "Error con el campo username")
    .exists()
    .withMessage("name es obligatorio")
    .notEmpty()
    .withMessage("name no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("description", "Error con el campo username")
    .exists()
    .withMessage("description es obligatorio")
    .notEmpty()
    .withMessage("description no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string"),
  check("date_share", "Error con el campo username")
    .exists()
    .withMessage("date_share es obligatorio")
    .notEmpty()
    .withMessage("date_share no debe estar vacio")
    .isDate()
    .withMessage("El campo date_share debe de fecha"),
  check("uer_id", "Error con el campo username")
    .exists()
    .withMessage("uer_id es obligatorio")
    .notEmpty()
    .withMessage("uer_id no debe estar vacio")
    .isInt()
    .withMessage("El campo uer_id tiene que ser entero"),
  check("company_id", "Error con el campo username")
    .exists()
    .withMessage("company_id es obligatorio")
    .notEmpty()
    .withMessage("company_id no debe estar vacio")
    .isInt()
    .withMessage("El campo company_id  tiene que ser entero"),
  validateResult
];

const updateAplicationValidator = [
  check("name", "Error con el campo username")
    .exists()
    .withMessage("name es obligatorio")
    .notEmpty()
    .withMessage("name no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("description", "Error con el campo username")
    .exists()
    .withMessage("description es obligatorio")
    .notEmpty()
    .withMessage("description no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string"),
  check("date_share", "Error con el campo username")
    .exists()
    .withMessage("description es obligatorio")
    .notEmpty()
    .withMessage("description no debe estar vacio")
    .isDate()
    .withMessage("El campo date_share debe de fecha"),
  validateResult
];

const addInterviewAplicationValidator = [
  check("aplication_job_id", "Error con el campo username")
    .exists()
    .withMessage("aplication_job_id es obligatorio")
    .notEmpty()
    .withMessage("aplication_job_id no debe estar vacio")
    .isInt()
    .withMessage("El campo aplication_job_id  tiene que ser entero"),
  validateResult
]


module.exports = {
  createAplicationValidator,
  updateAplicationValidator,
  addInterviewAplicationValidator
}