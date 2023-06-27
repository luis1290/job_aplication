const { Router } = require('express');
const { aplicationJobController } = require('../controllers/aplicationjobs.controlles');

const router = Router();

router.post("/aplicationjob", aplicationJobController);



module.exports = router;