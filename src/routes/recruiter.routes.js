const { Router } = require('express');
const { createRecruiterController, updateRecruiterController, deleteRecruiterController } = require('../controllers/recruiters.controlles');

const router = Router();

router.post("/addrecruiter", createRecruiterController);

router.put("/editrecruiter/:id", updateRecruiterController);

router.delete("/deliterecruiter/:id", deleteRecruiterController);

module.exports = router;