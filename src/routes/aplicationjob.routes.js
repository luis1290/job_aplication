const { Router } = require('express');
const { createAplicationJobController, updateAplicatioJobController, deleteAplicationJobController } = require('../controllers/aplicationjobs.controlles');

const router = Router();

router.post("/aplicationjob", createAplicationJobController);
router.put("/editaplicationjob/:id", updateAplicatioJobController);
router.delete("/deleteaplicationjob/:id", deleteAplicationJobController);



module.exports = router;