  var controllers   = SE.controllers;
  var API           = require(SE.api.path);

  /**
   * Application API
   */
  controllers.api = function(req, res) {

    var notAuthorizedErrMessage = 'You are not authorized to access this route!';

    if ( req.method !== "POST") {
      return res.status(401).send(
        {
          "HTTP METHOD ERROR": "Application must be submitted as an HTTP POST Request"
        });
    }
    if (req.params.action === 'submit') {
      return API.submitApp(req, res);
    }

    return res.status(403).send({
      error: notAuthorizedErrMessage
    });
  };

  controllers.home = function(req, res) {
    res.render('home');
  };

  // Export controllers:
  module.exports = SE.controllers;
