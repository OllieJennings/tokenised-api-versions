// User routes /users

var express = require('express');



var userRoutes = {
  '/': {
    method: 'get',
    fn: function(req, res) {
      res.status(200).json({ msg: 'The 2014-08-21 user route was hit' });
    }
  },
  '/test': {
    method: 'get',
    fn: function(req, res) {
      res.status(200).json({ msg: 'The 2014-08-21 user/test route was hit' });
    }
  }
};


var router = express.Router();

Object.keys(userRoutes).forEach(function(route) {
  router[userRoutes[route].method](route, userRoutes[route].fn);
});

module.exports = {
  router: router,
  endpoints: userRoutes
};
