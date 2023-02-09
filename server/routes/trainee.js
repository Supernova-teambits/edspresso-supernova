const express = require("express");
const router = express.Router();

const traineeCtrl = require("../controllers/traineeController");

// GET: /trainee
router.get("/trainee", traineeCtrl.getTrainee);

// GET: /trainee/:traineeId
router.get("/trainee/:id", traineeCtrl.getTrainee);

// POST: /trainee
router.post("/trainee", traineeCtrl.saveTrainee);

module.exports = router;