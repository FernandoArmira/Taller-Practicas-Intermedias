module.exports = app => {
    const activities = require("../controllers/activity.controller.js");

    var router = require("express").Router();

    // Delete with id
  router.delete("/:id", activities.delete);

  // Create
  router.delete("/", activities.deleteAll);

    app.use("/api/activities", router);

};