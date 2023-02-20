const Manager = require("../models/Manager");

const getManager = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        res.status(404).json("Manager not found");
    } else {
        Manager.findOne({ _id: id })
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

const saveManager = (req, res) => {
    const newManager = new Manager(req.body);
    newManager
        .save()
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const updateManager = (req, res) => {
    Manager.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((results) => {
            res.status(201).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}

module.exports = { getManager, saveManager, updateManager };