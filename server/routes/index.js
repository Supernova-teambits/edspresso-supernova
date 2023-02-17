const express = require("express");
const router = express.Router({ mergeParams: true});

const traineeRouter = require("./trainee");
const userRoleRouter = require("./userRole");
const managerRouter = require("./manager");

// using nested routers allows better organization
router.use(traineeRouter);
router.use(userRoleRouter);
router.use(managerRouter);

module.exports = router;