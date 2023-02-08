const express = require("express");
const router = express.Router({ mergeParams: true});

// import trainees router
const traineeRouter = require("./trainee");

// using nested routers allows better organization
router.use(traineeRouter);

module.exports = router;