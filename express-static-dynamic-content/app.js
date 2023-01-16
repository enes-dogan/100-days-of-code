const path = require('path');

const express = require('express');

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes); // All incoming request will be forwarded
// default if one of the routes matches it will stop otherwise continue
app.use('/', restaurantRoutes); // after "/" is evaluated

app.use(function (req, res) {
  res.status(404).render('404');
});

app.use(function (error, req, res, next) {
  res.status(500).render('500');
});

app.listen(3000);
