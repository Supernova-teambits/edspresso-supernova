const express = require("express");
const router = express.Router();

const userRoleCtrl = require("../controllers/userRoleController");

// POST: /register
router.post("/register", userRoleCtrl.saveUserRole);

// POST: /login
router.post("/login", userRoleCtrl.logIn);

module.exports = router;