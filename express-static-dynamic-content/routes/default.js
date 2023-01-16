const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('index'); // responsing with ejs engine
  /*
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath); */ // sending response with express
});

router.get('/about', function (req, res) {
  res.render('about');
});

module.exports = router;
