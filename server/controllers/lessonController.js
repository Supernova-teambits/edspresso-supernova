const Lesson = require("../models/Lesson");

const getLesson = (req, res) => {
    const id = req.params.id;
    if (typeof id == "undefined") {
        Lesson.find({}).exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    } else {
        Lesson.findOne({ _id: id }).exec()
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

const saveLesson = (req, res) => {
    const newLesson = new Lesson(req.body);
    newLesson.save()
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const updateLesson = (req, res) => {
    Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(results => {
        res.status(201).json(results);
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

const deleteLesson = (req, res) => {
    Lesson.findByIdAndDelete(req.params.id)
    .then(results => {
        if (results != null) {
            res.status(200).json("Delete completed");
        } else {
            res.status(404).json("Delete fail: Lesson not found");
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
}

module.exports = { getLesson, saveLesson, updateLesson, deleteLesson };