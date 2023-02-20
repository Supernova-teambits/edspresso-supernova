const express = require("express");
const router = express.Router();

// import the controller, make sure it is exported
const managerCtrl = require("../controllers/managerController");

// GET: /manager
router.get("/manager", managerCtrl.getManager);

// GET: /manager/:id
router.get("/manager/:id", managerCtrl.getManager);

// POST: /manager
router.post("/manager", managerCtrl.saveManager);

// PUT: /manager/:id
router.put("/manager/:id", managerCtrl.updateManager);

module.exports = router;