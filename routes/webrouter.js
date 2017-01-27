var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.sendFile('/index.html', { root: './public' });
  });

router.route('/mockery')
  .get(function(req, res) {
    res.sendFile('/mockery.html', { root: './public' });
  });

module.exports = router;
