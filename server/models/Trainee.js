const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TraineeSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    login_token: { type: String },
    photo: { type: String },
    mobile: { type: String, required: true },
    assigned_lessons: { type: Array, required: true },
    trainee_lessons_progress: { type: Array, required: true },
    badges: { type: Array, required: true },
    manager_code: { type: String, required: true },
    status: { type: String, required: true },
});

const Trainee = mongoose.model("Trainee", TraineeSchema);
module.exports = Trainee;