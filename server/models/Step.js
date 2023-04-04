const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StepSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    note: { type: String },
    content_type: { type: String },
    content_detail: { type: Array },
});

const Step = mongoose.model("Step", StepSchema);
module.exports = Step;