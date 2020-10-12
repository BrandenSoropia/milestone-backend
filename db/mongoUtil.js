// source: https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

var _db = null;
var _client = null;

// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "msDevDB";

async function connectToDB(callback) {
  let connectedClient = null;
  try {
    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Use connect method to connect to the Server
    connectedClient = await client.connect();

    if (connectedClient.isConnected) {
      console.log(
        "Connected successfully to MongoDB, current database: " +
          dbName +
          ".\nServer running on: " +
          url
      );
      _client = connectedClient;
      _db = connectedClient.db(dbName);

      callback();
    }
  } catch (error) {
    console.log("### Error in connectToDB: ", error.message);
    if (connectedClient.isConnected) {
      console.log("### Closing connections to DB.");
      connectedClient.close();
    }
  }
}

function getClient() {
  return _client;
}

function getDB() {
  return _db;
}

function close() {
  _client.close();
}

module.exports = {
  connectToDB: connectToDB,
  getClient: getClient,
  getDB: getDB,
  close: close,
};
