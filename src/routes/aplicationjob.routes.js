const { Router } = require('express');
const { aplicationJobController, addInterviewAplicationController } = require('../controllers/aplicationjobs.controlles');

const router = Router();

router.post("/aplicationjob", aplicationJobController);

router.put("/addinterviewaplicationjob/:id", addInterviewAplicationController);

module.exports = router;