const schedules = require("../controllers/schedule.controller.js");
const { authJwt } = require("../middlewares");
module.exports = app => {
  
    var router = require("express").Router();

    //Create a new Schedule
    router.post("/",[authJwt.verifyToken, authJwt.isAuthorized], schedules.create);

    //Find a Schedule
    router.get("/:projectId/:scheduleId", [authJwt.verifyToken], schedules.findOne);

    //Update schedule in a Project

    router.put("/:id",[authJwt.verifyToken, authJwt.isAuthorized], schedules.update);

    //Delete a Schedule with id
    router.delete("/:projectId/:scheduleId", [authJwt.verifyToken, authJwt.isAuthorized], schedules.delete)
  
    app.use('/api/schedule', router);
  };