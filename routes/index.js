// Index Routes

module.exports = function(app) {


  app.all('*', function(req, res, next) {
    
    console.log(req.path, req.originalUrl, req.query);

    if (req.path == '/') { next(); }
    
    // check if api key
    if (!req.query['api_key']) return res.status(200).json({ error: 'No API Key Provided' });

    require('./keys')(req, {
      mongoose: {
        table: 'apiKeys'
      },
      append: '/' // replaces after host section
    }, function(e, valid) {
      if (valid) { next(); }
      if (!valid) { return res.status(500).json({ err: e }); }
    });
  });

  app.get('/', function(req, res) {
    res.render('app');
  }); // for displaying the dashboard!


  app.use('/users', require('./users').router);
  app.use('/2014-08-14/users', require('./versions/2014-08-14/users').router);
  app.use('/2014-08-21/users', require('./versions/2014-08-21/users').router);
  // app.use('/posts', require('./posts').router);
  // app.use('/keys', require('./keys').router); // responsible for gening the new tokens
};
