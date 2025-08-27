var express = require('express');
var router = express.Router();

const heladosctr = require('../controllers/helados.js')

router.get('/fede', heladosctr.getMain);

module.exports = router;