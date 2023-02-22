const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    photo: { type: String },
    trainees: { type: Array },
    num_of_trainees: { type: Number },
    training_lessons: { type: Array },
    manager_code: { type: String, required: true },
});

const Manager = mongoose.model("Manager", ManagerSchema);
module.exports = Manager;