const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TraineeSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    login_token: { type: String },
    photo: { type: String },
    mobile: { type: String },
    email: { type: String },
    assigned_lessons: { type: Array },
    trainee_lessons_progress: { type: Array },
    badges: { type: Array },
    manager_code: { type: String },
    status: { type: String },
});

const Trainee = mongoose.model("Trainee", TraineeSchema);
module.exports = Trainee;