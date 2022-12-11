const db = require("../models");
const Acitvity = db.activities;

// Delete with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Acitvity.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Activity with id=${id}. Maybe Activity was not found!`
          });
        } else {
          res.send({
            message: "Activity was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Activity with id=" + id
        });
      });
  };
  
  // Delete all from the database.
  exports.deleteAll = (req, res) => {
    Acitvity.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Activities were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all activities."
        });
      });
  };