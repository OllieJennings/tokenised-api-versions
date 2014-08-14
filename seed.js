// Seed file

var Key = require('./models/keys_model');
var async = require('async');


var db = require('./database');


console.log('First, removing everything');

async.each([Key], function(c, cb) {
  c.remove({}, cb);
}, function() {

  var keycol = [
    new Key({ appName: 'testApp1', apiKey: '12345', users: '2014-08-14', posts: '2014-06-21' }),
    new Key({ appName: 'testApp2', apiKey: '34567', users: '2014-08-21', posts: '2014-06-14' })
  ];


  async.each(keycol, function(c, cb) {
    c.save(function(e, key) {
      if(!key) { 
        console.log('Error: ',e);
      } else {
        console.log('Key created: ', key.appName, key.apiKey, key.users, key.posts);
      }
      cb();
    });
  }, function() {
    db.close();
  });
});
