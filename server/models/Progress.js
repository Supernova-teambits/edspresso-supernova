const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
  trainee_name: { type: String, required: true },
  lesson_title: { type: String, required: true },
  trainee_lesson: { type: String },
  manager_code: { type: String, required: true },
  progress_status: { type: Number, default: 0, required: true },
  started_date: { type: Date },
  completed_date: { type: Date },
  completed_time: { type: Number },
  certification_date: { type: Date },
  test_result: { type: Number },
  step_progress: { type: Array },
});

const Progress = mongoose.model("Progress", ProgressSchema);
module.exports = Progress;
