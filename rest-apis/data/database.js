const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
  database = client.db('first-api');
}

function getDb() {
  if (!database) {
    throw new Error('Database not initialized!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
