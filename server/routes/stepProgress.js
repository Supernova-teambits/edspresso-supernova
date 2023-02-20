const express = require("express");
const router = express.Router();

const stepProgressCtrl = require("../controllers/stepProgressController");

router.get("/stepProgress/:id", stepProgressCtrl.getStepProgress);

router.post("/stepProgress", stepProgressCtrl.saveStepProgress);

router.put("/stepProgress/:id", stepProgressCtrl.updateStepProgress);

router.delete("/stepProgress/:id", stepProgressCtrl.deleteStepProgress);

module.exports = router;