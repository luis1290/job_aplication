const { Router } = require('express');
const { createInterviewController, addInterviewAplicationController, updateInterviewsController, deleteInterviewsController, confirmInterviewController } = require('../controllers/interviews.controlles');
const { addInterviewAplicationValidator } = require('../validators/aplication.validators');
const { createInterviewsValidator, updateInterviewsValidator } = require('../validators/interviews.validators');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/addinterviews", createInterviewsValidator, createInterviewController);

router.put("/addinterviewaplicationjob/:id", addInterviewAplicationValidator, authenticate, addInterviewAplicationController);
router.put("/editinterviews/:id", updateInterviewsValidator, authenticate, updateInterviewsController);
router.put("/confirminterviews/:id", authenticate, confirmInterviewController);
router.delete("/deliteinterviews/:id", authenticate, deleteInterviewsController);

module.exports = router;