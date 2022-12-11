const db = require("../models");
const Acitvity = db.activities;

// Create and Save
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create
    const activity = new Acitvity({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed ? req.body.completed : false
    });
  
    // Save in the database
    activity
      .save(activity)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Activity."
        });
      });
  };
  