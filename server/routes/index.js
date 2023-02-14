const express = require("express");
const router = express.Router({ mergeParams: true});

const traineeRouter = require("./trainee");
const userRoleRouter = require("./userRole");

// using nested routers allows better organization
router.use(traineeRouter);
router.use(userRoleRouter);

module.exports = router;