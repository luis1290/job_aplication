const { Router } = require('express');
const { createAplicationJobController, updateAplicatioJobController, deleteAplicationJobController } = require('../controllers/aplicationjobs.controlles');
const { createAplicationValidator, updateAplicationValidator } = require('../validators/aplication.validators');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post("/aplicationjob", createAplicationValidator, authenticate, createAplicationJobController);
router.put("/editaplicationjob/:id", updateAplicationValidator, authenticate, updateAplicatioJobController);
router.delete("/deleteaplicationjob/:id", authenticate, deleteAplicationJobController);



module.exports = router;