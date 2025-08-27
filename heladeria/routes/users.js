const express = require('express');
const router = express.Router();
const heladosctr = require('../controllers/helados.js');

router.get('/users', heladosctr.getUsers);

module.exports = router;
