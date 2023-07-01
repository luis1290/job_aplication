const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createCompanyValidator = [
  check("name", "Error con el campo username")
    .exists()
    .withMessage("name es obligatorio")
    .notEmpty()
    .withMessage("name no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("email", "Error con el campo email")
    .exists()
    .withMessage("email es obligatorio")
    .notEmpty()
    .withMessage("email no puede estar vacio")
    .isString()
    .withMessage("email debe ser un string")
    .isEmail()
    .withMessage("email no tiene formato de correo")
    .isLength()
    .withMessage("El email debe tener minimo 10 caracteres y máximo 50"),
  check("location", "Error con el campo username")
    .exists()
    .withMessage("location es obligatorio")
    .notEmpty()
    .withMessage("location no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6 })
    .withMessage("El location debe tener minimo 6 caracteres "),
  validateResult
];


const editCompanyValidator = [
  check("name", "Error con el campo username")
    .exists()
    .withMessage("name es obligatorio")
    .notEmpty()
    .withMessage("name no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("email", "Error con el campo email")
    .exists()
    .withMessage("email es obligatorio")
    .notEmpty()
    .withMessage("email no puede estar vacio")
    .isString()
    .withMessage("email debe ser un string")
    .isEmail()
    .withMessage("email no tiene formato de correo")
    .isLength()
    .withMessage("El email debe tener minimo 10 caracteres y máximo 50"),
  check("location", "Error con el campo username")
    .exists()
    .withMessage("location es obligatorio")
    .notEmpty()
    .withMessage("location no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6 })
    .withMessage("El location debe tener minimo 6 caracteres "),
  validateResult
];


module.exports = { createCompanyValidator,editCompanyValidator };