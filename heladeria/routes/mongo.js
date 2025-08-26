var  router = require('express').Router()

const heladosctr = require('../controllers/helados')

router.get('/movies', heladosctr.getMovies)

module.export = router