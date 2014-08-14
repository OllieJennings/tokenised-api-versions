// Keys Model

var mongoose = require('mongoose');
var db = require('../database');

var keySchema = mongoose.Schema({
  appName: String,
  apiKey: String,
  users: String,
  posts: String
});


var Keys = mongoose.model('Keys', keySchema);

module.exports = Keys;
