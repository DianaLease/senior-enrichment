const campusRouter = require('express').Router()
const Campus = require('../db/models/campus')

// GET /api/campuses (get all campuses)
campusRouter.get('/', (req, res, next) => {
  Campus.findAll({include: {all: true}})
    .then(campuses => res.send(campuses))
    .catch(next);
});

// GET /api/campuses/:campusId (get a campus by id)
campusRouter.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, { include: { all: true } })
    .then(campus => res.send(campus))
    .catch(next);
});

// POST /api/campuses (create new campus)
campusRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).send(campus))
    .catch(next);
});

// PUT /api/campuses/:campusId (update a campus)
campusRouter.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.update(req.body))
    .then(response => res.send(response.dataValues))
    .catch(next);
});

// DELETE /api/campuses/:campusId (delete a campus)
campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.destroy())
    .then(res.sendStatus(204))
    .catch(next);
});



module.exports = campusRouter;

