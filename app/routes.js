/**
 * App routes:
 */
module.exports = function(app) {

    // Get controllers path from app namespace
    var controllers = require(SE.controllers.path);

    // to support JSON-encoded bodies
    app.use(SE.bodyParser.json() );

    // to support URL-encoded bodies
    app.use(SE.bodyParser.urlencoded({
      extended: true
    }));
    
    /**
     * home page:
     */
    app.get('/', (req, res) => {
      controllers.home(req, res);
    });

    /**
     * App REST API:
     */
    app.all('/api/:action', (req, res) => {
      controllers.api(req, res);
    });

};
