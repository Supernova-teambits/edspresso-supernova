const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
    trainee_id: { type: String, required: true },
    trainee_name: { type: String, required: true },
    trainee_lesson: { type: String, required: true },
    manager_code: { type: String, required: true },
    progress_status: { type: Number, required: true },
    certification: { type: String },
    test_result: { type: Number },
    step_progress: { type: Array, required: true },
});

const Progress = mongoose.model("Progress", ProgressSchema);
module.exports = Progress;