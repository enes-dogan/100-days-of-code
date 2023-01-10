const http = require('http');

function handleRequest(request, response) {
  if (request.url === '/currenttime') {
    response.statusCode = 200;
    response.end('<h1>' + new Date().toISOString() + '</h1>' + '<a href="/">go back</a>');
  } else if (request.url === '/') {
    response.statusCode = 200;
    response.end('<h1> Hello world </h1> <a href="/currenttime">go to time</a>');
  }
}
const server = http.createServer(handleRequest); // createServer wants a wants a request listener
//What to do if it got a request as a callback function

server.listen(3000);
// Listens incoming request and sends a resopnse

/* CreateServer() wants a function as a parameter that then the function takes 
 two parameter values for request and response will be passed into this function 
 once NodeJS executes this function whenever a request is reaching server.*/
