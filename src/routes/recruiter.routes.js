const { Router } = require('express');
const { createRecruiterController, updateRecruiterController, deleteRecruiterController, getAllRecluiterController } = require('../controllers/recruiters.controlles');

const router = Router();

router.post("/addrecruiter", createRecruiterController);

router.put("/editrecruiter/:id", updateRecruiterController);


router.delete("/deliterecruiter/:id", deleteRecruiterController);

router.get("/getallrecluiter/", getAllRecluiterController);

module.exports = router;