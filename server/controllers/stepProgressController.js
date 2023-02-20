const StepProgress = require("../models/StepProgress");

const getStepProgress = (req, res) => {
    const id = req.params.id;
    StepProgress.findOne({ _id: id }).exec()
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

const saveStepProgress = (req, res) => {
    const newStepProgress = new StepProgress(req.body);
    newStepProgress.save()
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const updateStepProgress = (req, res) => {
    StepProgress.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    }); 
}

const deleteStepProgress = (req, res) => {
    StepProgress.findByIdAndDelete(req.params.id)
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

module.exports = { getStepProgress, saveStepProgress, updateStepProgress, deleteStepProgress };