const { Router } = require('express');
const { createInterviewController } = require('../controllers/interviews.controlles');

const router = Router();

router.post("/addinterviews", createInterviewController);

module.exports = router;