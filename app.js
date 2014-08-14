// Set Up ========================

var express = require('express');
var http = require('http');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();


app.set('view engine', 'ejs');



// Config ========================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./routes')(app);

module.exports = app;
