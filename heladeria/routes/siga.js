var  router = require('express').Router()

const heladosctr = require('../controllers/helados.js')

router.post('/siga', heladosctr.getSiga)

module.export = router