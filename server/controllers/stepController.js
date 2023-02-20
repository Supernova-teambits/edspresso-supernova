const Step = require("../models/Step");

const getStep = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        Step.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        Step.findOne({ _id: id }).exec()
        .then(results => {
            if (results != null) {
                res.status(200).json(results);
            } else {
                res.status(404).json(results);
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
    }
}

const saveStep = (req, res) => {
    const newStep = new Step(req.body);
    newStep.save()
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const updateStep = (req, res) => {
    Step.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });    
}

const deleteStep = (req, res) => {
    Step.findByIdAndDelete(req.params.id)
    .then(results => {
        if (results != null) {
            res.status(200).json("Delete completed");
        } else {
            res.status(404).json("Delete fail: Step not found");
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

module.exports = { getStep, saveStep, updateStep, deleteStep };