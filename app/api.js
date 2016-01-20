  /**
   * Application APIs:
   */

  var API           = SE.api;
  SE.Application    = require('./applications');
  var Application   = new SE.Application;

  /**
   * Set user JWT:
   */
  API.submitApp = function (req, res) {

    var jwtSecret               = new Buffer(SE.App.locals.JWTSecret.toString());
    var failedSubmission        = 'application submission failed';

    // Get JWT contents:
    try {
      var wt = req.query.wt || req.body.wt;
      var payload = SE.JWT.verify(wt, jwtSecret);
    } catch (err) {
      console.error('[ERROR]: JWT Error reason:', err);
      return res.status(403).send({
        error: failedSubmission,
        reason: err
      });
    }

    var appDoc = {
      subject: payload.sub,
      name: payload.iss,
      email: payload.email,
      phone: payload.phone
    };

    return Application.upsert(appDoc, res, req);
  };

  // Export:
  module.exports = SE.api;
