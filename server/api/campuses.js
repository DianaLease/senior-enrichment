const campusRouter = require('express').Router()
const Campus = require('../db/models/campus')

// GET /api/campuses
campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});


module.exports = campusRouter;

