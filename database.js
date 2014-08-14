var mongoose = require('mongoose');
var env = 'development';

mongoose.connect('mongodb://localhost/tokenisedAPIKeys');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

module.exports = db;
