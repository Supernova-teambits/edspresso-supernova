const express = require("express");
const router = express.Router();

const traineeCtrl = require("../controllers/traineeController");

router.get("/trainee/managerCode/:id", traineeCtrl.getTraineeAccordingToManagerCode);

router.get("/trainee", traineeCtrl.getTrainee);

router.get("/trainee/:id", traineeCtrl.getTrainee);

router.post("/trainee", traineeCtrl.saveTrainee);

router.put("/trainee/:id", traineeCtrl.updateTrainee);

module.exports = router;