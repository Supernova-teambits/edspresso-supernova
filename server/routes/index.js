const express = require("express");
const router = express.Router({ mergeParams: true});

const traineeRouter = require("./trainee");
const userRoleRouter = require("./userRole");
const managerRouter = require("./manager");
const progressRouter = require("./progress");
const lessonRouter = require("./lesson");
const stepRouter = require("./step");
const stepProgressRouter = require("./stepProgress");
const categoryRouter = require("./category");

// using nested routers allows better organization
router.use(traineeRouter);
router.use(userRoleRouter);
router.use(managerRouter);
router.use(progressRouter);
router.use(lessonRouter);
router.use(stepRouter);
router.use(stepProgressRouter);
router.use(categoryRouter);

module.exports = router;