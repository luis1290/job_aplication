const { Router } = require('express');
const { createAplicationJobController, updateAplicatioJobController, deleteAplicationJobController } = require('../controllers/aplicationjobs.controlles');

const router = Router();

router.post("/aplicationjob", createAplicationJobController);
router.put("/editaplicationjob", updateAplicatioJobController);
router.delete("/deleteaplicationjob", deleteAplicationJobController);



module.exports = router;