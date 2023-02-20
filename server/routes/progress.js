const express = require("express");
const router = express.Router();

const progressCtrl = require("../controllers/progressController");

router.get("/progress/managerCode/:id", progressCtrl.getProgressAccordingToManagerCode);

router.get("/progress/trainee/:id", progressCtrl.getProgressAccordingToTraineeId);

router.post("/progress", progressCtrl.saveProgress);

router.put("/progress/:id", progressCtrl.updateProgress);

module.exports = router;