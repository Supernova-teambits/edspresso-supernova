const express = require("express");
const router = express.Router();

const userRoleCtrl = require("../controllers/userRoleController");

router.post("/register", userRoleCtrl.saveUserRole);

router.post("/login", userRoleCtrl.logIn);

router.put("/userRole/:id", userRoleCtrl.updateUserRole);

module.exports = router;