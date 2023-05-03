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

/*
  `
  The happiness of your life depends upon the quality of your thoughts.
  Remember that very little is needed to make a happy life.
  You have power over your mind – not outside events. Realize this, and you will find strength.
  Wealth consists not in having great possessions, but in having few wants.
  First say to yourself what you would be; and then do what you have to do.
  He who laughs at himself never runs out of things to laugh at.
  `
*/
