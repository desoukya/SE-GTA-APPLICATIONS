  /**
   * Application Namespace:
   */
  appConfig = function() {

    // Export environment vars first thing
    require('dotenv').load();

    var self              = this;
    self.express          = require('express');
    self.exphbs           = require('express-handlebars');
    self.JWT              = require('jsonwebtoken');
    self.bodyParser       = require('body-parser');
    self.dbURL            = process.env.MONGODB_URL.toString();
    self.api              = { path: './api' };
    self.controllers      = { path: './controllers' };
    self.routes           = { path: './routes' };

    /**
     * Bootup app:
     */
    self.bootup = function( app ) {

      console.log('[[[[[ Booting up... ]]]]]');

      // App port:
      app.set('port', 3000);

      // Global Env Vars:
      app.locals.MongoDBUrl   = process.env.MONGODB_URL;
      app.locals.JWTSecret    = process.env.JWTSECRET;

      // view engine
      app.engine('handlebars', self.exphbs( {defaultLayout: 'main'} ));
  		app.set('view engine', 'handlebars');

      app.use(SE.express.static('public'));

      console.log('[OK] => Finished booting up.');

    };

  };

  module.exports = new appConfig();
