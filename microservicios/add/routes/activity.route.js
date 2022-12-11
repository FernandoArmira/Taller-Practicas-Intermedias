module.exports = app => {
    const activities = require("../controllers/activity.controller.js");

    var router = require("express").Router();

  // Create
  router.post("/", activities.create);

  app.use("/api/activities", router);

};

