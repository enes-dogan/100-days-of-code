// ---EXPRESS.JS---
const express = require('express'); // returns function not an object unlike built-in HTTP package

const app = express();

//get() methods first value is path which we'll listen for incoming request
// second value is the function we want to execute for the incoming request
app.get('/currenttime', (req, res) => {
  //combination of path and req+res handler function is called "route" or "route handler"
  res.send(
    '<h1>' + new Date().toISOString() + '</h1>' + '<a href="/">go back</a>'
  );
}); //localhost:3000/currenttime

app.get('/', function (req, res) {
  res.send('<h1> Hello world </h1> <a href="/currenttime">go to time</a>');
}); //localhost:3000/

app.listen(3000);

// We never state the status code `response.statusCode = 200;`
// Because express will set it to 200 as a default
