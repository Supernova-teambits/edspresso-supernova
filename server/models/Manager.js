const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    photo: { type: String },
    trainees: { type: Array, required: true },
    num_of_trainees: { type: Number },
    training_lessons: { type: Array, required: true },
    manager_code: { type: String, required: true },
});

const Manager = mongoose.model("Manager", ManagerSchema);
module.exports = Manager;