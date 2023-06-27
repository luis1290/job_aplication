const { Router } = require('express');
const { createInterviewController, addInterviewAplicationController } = require('../controllers/interviews.controlles');

const router = Router();

router.post("/addinterviews", createInterviewController);

router.put("/addinterviewaplicationjob/:id", addInterviewAplicationController);

module.exports = router;