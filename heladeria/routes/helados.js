const express = require('express');
const router = express.Router();
const heladosController = require('../controllers/helados');

// Ruta GET
router.get('/mongo', heladosController.getHelados);

module.exports = router;
