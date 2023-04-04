const Progress = require("../models/Progress");

const getProgressAccordingToManagerCode = (req, res) => {
  const id = req.params.id;
  if (typeof id == "undefined") {
    res.status(404).json("Manager code not found");
  } else {
    Progress.find({ manager_code: id })
      .exec()
      .then((results) => {
        if (results != null) {
          res.status(200).json(
            results.map(
              ({
                trainee_name,
                trainee_photo,
                lesson_title,
                progress_status,
                started_date,
                completed_date,
                completed_time,
              }) => ({
                trainee_name,
                trainee_photo,
                lesson_title,
                progress_status,
                started_date,
                completed_date,
                completed_time,
              })
            )
          );
        } else {
          res.status(404).json("Progress not found");
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

const getProgressAccordingToTraineeId = (req, res) => {
  const id = req.params.id;
  if (typeof id == "undefined") {
    res.status(404).json("Manager not found");
  } else {
    Progress.findOne({ trainee_id: id })
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

const saveProgress = (req, res) => {
  const newProgress = new Progress(req.body);
  newProgress
    .save()
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const updateProgress = (req, res) => {
  Progress.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = {
  getProgressAccordingToManagerCode,
  getProgressAccordingToTraineeId,
  saveProgress,
  updateProgress,
};
