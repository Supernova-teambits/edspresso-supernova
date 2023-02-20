const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    title: { type: String, required: true },
    steps: { type: Array },
    steps_visible: { type: Array },
    difficulty: { type: Number },
    category: { type: String },
    requirements: { type: Array },
    time: { type: String },
    mentor: { type: String },
    description: { type: String, required: true },
});

const Lesson = mongoose.model("Lesson", LessonSchema);
module.exports = Lesson;