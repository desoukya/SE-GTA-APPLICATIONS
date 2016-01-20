  /**
   * Users:
   */
  module.exports = function(app) {

      var self   = this;

      /**
       * Insert new application:
       */
      self.insert = function( _app, res, req ) {
          SE.appsCollection.insertOne(_app, (err, appDoc) => {
              if( err ) {
                  console.error('failed to insert app doc.', err);
                  return res.status(500).send({
                      error: 'failed to insert app doc.',
                      reason: err
                  });
              } else {
                     return res.status(200).send({ success: "Thank you for submitting your application!!!" });
              }
          });
      };


      /**
       * Insert application
       */
      self.upsert = function( _app, res, req ) {
        // Check if user has submitted an application
        SE.appsCollection.find({ email: _app.email }).limit(1).toArray((err, found) => {
          if (err) {
              console.log('Find one err', err);
          } else {
            // app already exists:
            if( found.length !== 0 ) {
                return res.status(200).send({ duplicate: "We have already received your application - thanks again!" });
            } else {
                // App is not in the DB
                return self.insert( _app, res, req );
            }
          }
      });
    };

  };
