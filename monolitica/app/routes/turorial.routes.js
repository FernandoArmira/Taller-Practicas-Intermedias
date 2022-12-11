module.exports = app => {
  const activities = require("../controllers/activity.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", activities.create);

  // Retrieve all 
  router.get("/", activities.findAll);

  // Retrieve all completed 
  router.get("/published", activities.findAllCompleted);

  // Retrieve a single with id
  router.get("/:id", activities.findOne);

  // Update with id
  router.put("/:id", activities.update);

  // Delete with id
  router.delete("/:id", activities.delete);

  // Create
  router.delete("/", activities.deleteAll);

  app.use("/api/activities", router);
};
