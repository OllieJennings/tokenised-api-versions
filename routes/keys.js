// Keys module

var express = require('express');
var Key = require('../models/keys_model');


var validateRequest = function(req, options, cb) {
  Key.findOne({ apiKey: req.query['api_key'] }, function(e, key) {
    if (!key) { return cb('invalid api key', null) };

    console.log(key.users, key.posts, req.path.split('/'));
    console.log(key[req.path.split('/')[1]]);

    if (!key[req.path.split('/')[1]]) { return cb('invalid route path', null) };

    var version = key[req.path.split('/')[1]];
    var newPath = '/' + version + req.path;

    // change the path now
    req.path = req.url = newPath;

    console.log(req.path);

    return cb(null, true);
  });
};






module.exports = validateRequest;
