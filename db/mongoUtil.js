const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

let _db = null;

// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "msDevDB";

function connectToDB() {
  // Create a new MongoClient
  const client = new MongoClient(url, { useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(function (err) {
    assert.strictEqual(null, err);
    console.log(
      "Connected successfully to MongoDB, current database: " +
        dbName +
        ".\nServer running on: " +
        url
    );

    _db = client.db(dbName);

    client.close();
  });
}

module.exports = {
  connectToDB: connectToDB,
  getDB: function () {
    return _db;
  },
};
