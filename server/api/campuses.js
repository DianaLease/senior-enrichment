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
    .then(res.status(204).end())
    .catch(next);
});

// DELETE /api/campuses/:campusId (delete a campus) TODO: maybe not redirect?
campusRouter.delete('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => campus.destroy())
    .then(res.status(204).redirect('/api/campuses'))
    .catch(next);
});

// TODO As a user I can edit a campus's info, including adding/removing a student to/from that campus. Might need to use eager loading in the put route??


module.exports = campusRouter;

