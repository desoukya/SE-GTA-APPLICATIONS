  "use strict"
  class seDB {

    constructor() {
      this.MongoClient = require('mongodb').MongoClient;
    }

    init() {
      this.MongoClient.connect( SE.dbURL, (err, db) => {
        SE.DB                     = db;
        SE.appsCollection         = db.collection('apps');
      });
    }

  }

  var DB = new seDB();
  module.exports = DB;
