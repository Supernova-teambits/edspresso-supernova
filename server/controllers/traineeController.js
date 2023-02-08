const traineeData = require("../models/traineeData");

//Create a function for the action of retrieve trainees
const getTrainee = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        res.status(200).json({ trainees: traineeData.trainees });
    } else {
        const trainee = traineeData.trainees.find((x) => x.id == id);
        res.status(200).json({ trainees: [trainee]});
    }
};

module.exports = { getTrainee };