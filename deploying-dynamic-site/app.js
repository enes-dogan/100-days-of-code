const path = require('path');

const express = require('express');

const db = require('./data/database');
const mainRoutes = require('./routes/main.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(mainRoutes);

app.use(function (error, req, res, next) {
  res.status(500).render('500');
});

db.initDatabase()
  .then(function () {
    app.listen(port);
  })
  .catch(function (error) {
    console.log('Connecting to the database failed!');
  });
