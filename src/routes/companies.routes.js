const { Router } = require('express');
const { createCompanyController, updateCompanyController, deleteCompanyController, getCompanyRecluiterController } = require('../controllers/companies.controlles');

const router = Router();

router.post("/companies", createCompanyController);
router.put("/editcompanies", updateCompanyController);
router.delete("/delitecompanies", deleteCompanyController);
router.get("/getcompanies/:id", getCompanyRecluiterController);

module.exports = router;