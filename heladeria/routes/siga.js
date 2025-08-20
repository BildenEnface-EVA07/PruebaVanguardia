var  router = require('express').Router()

const heladosctr = require('../controllers/helados')

router.post('/siga', heladosctr.getSiga)

module.export = router