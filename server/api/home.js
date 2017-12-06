const homeRouter = require('express').Router()

// GET /api/home
homeRouter.get('/', (req, res, next) => {
  res.send('You are home')
});


module.exports = homeRouter;

