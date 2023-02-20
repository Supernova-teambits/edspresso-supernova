const express = require("express");
const router = express.Router();

const stepCtrl = require("../controllers/stepController");

router.get("/step", stepCtrl.getStep);

router.get("/step/:id", stepCtrl.getStep);

router.post("/step", stepCtrl.saveStep);

router.put("/step/:id", stepCtrl.updateStep);

router.delete("/step/:id", stepCtrl.deleteStep);

module.exports = router;