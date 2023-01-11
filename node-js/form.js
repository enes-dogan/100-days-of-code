const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false })); // incoming data needs to be parsed by the server by using ->
// middleware function
app.get('/currenttime', function (req, res) {
  res.send(
    '<h1>' + new Date().toISOString() + '</h1>' + '<a href="/">go back</a>'
  );
});

app.get('/', function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>'
  );
});

app.post('/store-user', function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, 'data', 'users.json');
  // path used for file system works cross platform on all operating systems

  //Before we write new data to the file, we have to read it and extract existing
  // data  out and then we add the new data to existing data and write the updated data bacck into the file

  const fileData = fs.readFileSync(filePath); // Raw data read from the file but the content interpreted as a text
  const existingUsers = JSON.parse(fileData); // Built-in helper that turns data in the .json format to JavaScript obect or array

  existingUsers.push(userName); //push() method is a default method we can call any array on JS to add (appends) new item into that array

  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //second param is which data should be written
  // like readFileSync reads as a raw text, writeFileSync wants a raw text. So using JSON.stringify we translate to raw text that follows the .json format
  res.send('<h1>Username stored!</h1>');
});

app.listen(3000);
