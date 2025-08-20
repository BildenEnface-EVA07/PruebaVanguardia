var express = require('express');
const heladosctr = require('../controllers/helados')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'chanfle' });
});

router.get('/hola', (req, res) => {
  res.send('Hello World!')
})

router.post('/siga', (req, res) => {
  res.send('Got a POST request')
})



module.exports = router;
