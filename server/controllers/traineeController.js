const Trainee = require("../models/Trainee");

const getTrainee = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        Trainee.find({})
            .exec()
            .then((results) => {
                res.status(200).json(results);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else {
        Trainee.findOne({ _id: id })
            .exec()
            .then((results) => {
                if (results != null) {
                    res.status(200).json(results);
                } else {
                    res.status(404).json(results);
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }
};


const saveTrainee = (req, res) => {
    let newTrainee = new Trainee(req.body);
    newTrainee
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const updateTrainee = (req, res) => {
    Trainee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}

module.exports = { getTrainee, saveTrainee, updateTrainee };