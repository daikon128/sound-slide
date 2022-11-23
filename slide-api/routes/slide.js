const path = require('path')
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.type('image/jpeg')
  res.sendFile('Lenna.jpg', { root: path.join(__dirname, '../data') })
});

module.exports = router;
