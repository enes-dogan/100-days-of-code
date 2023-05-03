const express = require('express');
const app = express();

app.get('/quotes', function (req, res) {
  const quotesArray = [
    'The happiness of your life depends upon the quality of your thoughts.',
    'Remember that very little is needed to make a happy life.',
    'You have power over your mind – not outside events. Realize this, and you will find strength.',
    'Wealth consists not in having great possessions, but in having few wants.',
    'First say to yourself what you would be; and then do what you have to do.',
    'He who laughs at himself never runs out of things to laugh at.',
  ];

  const numberOfQuotes = quotesArray.length;

  function getRandomIndex(index) {
    return Math.floor(Math.random() * index);
  }

  const random = getRandomIndex(numberOfQuotes);

  res.json(quotesArray[random]);
});

app.get('/', function (req, res) {
  res.redirect('/quotes');
});

app.listen(3000);
