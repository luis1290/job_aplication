const { Router } = require('express');
const { createCompanyController } = require('../controllers/companies.controlles');

const router = Router();

router.post("/companies", createCompanyController);

module.exports = router;