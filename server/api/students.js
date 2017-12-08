const studentRouter = require('express').Router()
const Student = require('../db/models/student')

// GET api/students
studentRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

// TODO the rest of the routes

module.exports = studentRouter;

