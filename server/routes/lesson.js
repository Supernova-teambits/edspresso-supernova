const express = require("express");
const router = express.Router();

const lessonCtrl = require("../controllers/lessonController");

router.get("/lesson", lessonCtrl.getLesson);

router.get("/lesson/:id", lessonCtrl.getLesson);

router.post("/lesson", lessonCtrl.saveLesson);

router.put("/lesson/:id", lessonCtrl.updateLesson);

router.delete("/lesson/:id", lessonCtrl.deleteLesson);

module.exports = router;