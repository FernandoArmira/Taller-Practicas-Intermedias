const db = require("../models");
const Acitvity = db.activities;

// Retrieve all from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Acitvity.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving activities."
        });
      });
  };
  
  // Find a single with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Acitvity.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Activity with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Acitvity with id=" + id });
      });
  };
  
  // Update by the id in the request
  exports.update = (req, res) => {
  
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    //console.log(req.body)
  
    const id = req.params.id;
  
    Acitvity.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Activity with id=${id}. Maybe Activity was not found!`
          });
        } else res.send({ message: "Activity was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Activity with id=" + id
        });
      });
  };

  // Find all done
exports.findAllCompleted = (req, res) => {
    Acitvity.find({ completed: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving activitiess."
        });
      });
  };
  