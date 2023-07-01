const { Router } = require('express');
const { createInterviewController, addInterviewAplicationController, updateInterviewsController, deleteInterviewsController } = require('../controllers/interviews.controlles');

const router = Router();

router.post("/addinterviews", createInterviewController);

router.put("/addinterviewaplicationjob/:id", addInterviewAplicationController);
router.put("/editinterviews/:id", updateInterviewsController);
router.delete("/deliteinterviews/:id", deleteInterviewsController);

module.exports = router;