const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StepProgressSchema = new Schema({
    step_title: { type: String, required: true },
    completed_date: {type: Date },
    time_spend: {type: Number }
});

const StepProgress = mongoose.model("StepProgress", StepProgressSchema);
module.exports = StepProgress;