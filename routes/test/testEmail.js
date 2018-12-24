const express = require('express');
const router = express.Router();
var helper = require('sendgrid').mail;
const async = require('async');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST /login gets urlencoded bodies
router.post('/', function(req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  } else {
    res.send('welcome, ' + req.body.username);
  }
});

module.exports = router;
