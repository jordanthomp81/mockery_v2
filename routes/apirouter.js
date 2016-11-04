var express = require('express');
var user = require('../dbmodels/user');
var template = require('../dbmodels/template');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());

router.use(function(req, res, next) {
    next();
});

router.route('/users')
    .get(function(req, res) {
        user.find({}, function(err, doc) {
            res.json(doc);
        });
    })

    .post(function(req, res) {
        newuser = new user(req.body);
        if(newuser.validateSync()) {
            res.sendStatus(403);
        } else {
            newuser.save();
            res.json(req.body);
        };
    });

router.route('/templates')
    .get(function(req, res) {
        template.find({}, function(err, doc) {
            res.json(doc);
        });
    })

    .post(function(req, res) {
        newtemplate = new template(req.body);
        if(newtemplate.validateSync()) {
            res.sendStatus(403);
        } else {
            newtemplate.save();
            res.json(req.body);
        }
    });

module.exports = router;