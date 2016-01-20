  var express       = require('express');
  var http          = require('http');
  var app           = express();

  // Configure app namespace:
  SE = require('./app/app'), SE.App = app;
  
  require('./app/routes')(SE.App);
  require('./app/db').init();
  SE.bootup( SE.App );

  // HTTP Server:
  http.createServer(app).listen(3000, function() {
     console.log("[OK] => HTTP Server listening on: http://localhost:3000");
  });
