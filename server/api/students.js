const studentRouter = require('express').Router()
const Student = require('../db/models/student')

// GET api/students
studentRouter.get('/', (req, res, next) => {
  Student.findAll({ include: { all: true } })
    .then(students => res.send(students))
    .catch(next);
});

// GET /api/students/:studentId (get a student by id)
studentRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId, { include: { all: true } })
    .then(student => res.send(student))
    .catch(next);
});

// POST /api/students (create new student)
studentRouter.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.status(201).send(student))
    .catch(next);
});

// PUT /api/students/:studentId (update a student)
studentRouter.put('/:studentId', (req, res, next) => {
  console.log('entering route', req.params.studentId);
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body))
    .then(response => res.send(response.dataValues))
    .catch(next);
});

// DELETE /api/students/:studentId (delete a student) TODO: maybe not redirect?
studentRouter.delete('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => student.destroy())
    .then(res.sendStatus(204))
    .catch(next);
});


module.exports = studentRouter;

