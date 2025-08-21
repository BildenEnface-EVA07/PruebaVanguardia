var  router = require('express').Router()

const heladosctr = require('../controllers/helados')

router.get('/main', heladosctr.getMain)

module.export = router