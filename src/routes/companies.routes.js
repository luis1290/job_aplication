const { Router } = require('express');
const { createCompanyController, updateCompanyController, deleteCompanyController, getCompanyRecluiterController } = require('../controllers/companies.controlles');
const { createCompanyValidator, editCompanyValidator } = require('../validators/companies.validators');

const router = Router();

router.post("/companies",createCompanyValidator, createCompanyController);
router.put("/editcompanies/:id",editCompanyValidator, updateCompanyController);
router.delete("/delitecompanies/:id", deleteCompanyController);
router.get("/getcompanies/:id", getCompanyRecluiterController);

module.exports = router;