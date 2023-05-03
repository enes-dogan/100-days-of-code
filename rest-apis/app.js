const express = require('express');
const app = express();

app.get('/quotes', function (req, res) {
  res.json(
    'The happiness of your life depends upon the quality of your thoughts. Remember that very little is needed to make a happy life.'
  );
});

app.get('/', function (req, res) {
  res.redirect('/quotes');
});

app.listen(3000);
