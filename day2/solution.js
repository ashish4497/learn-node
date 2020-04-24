// 1. Create a basic server and listen for request on port 5000.

const http = require("http");

http.createServer((req, res) => {
  res.write("Hello");
  res.end();
});

const server = http.createServer(requestListener);
server.listen(5000);

// 2) create a server and return a respnse 'My first server in NodeJS' and listen on port 5100;

const http = require("http");

http.createServer((req, res) => {
  res.write(200);
  res.end("My first server in NodeJS");
});
const server = http.createServer(requestListener);

server.listen(5100);

// 3) create a server and console request headers, request url and request method.
const http = require("http");

const requestListener = function (req, res) {
  console.log({ Headers: req.headers, Url: req.url, Method: req.method });
  res.writeHead(200);
  res.end("My first server in NodeJS");
};

const server = http.createServer(requestListener);
server.listen(8080);

// 4) create a server and return entire request headers in response.
const http = require("http");

http
  .createServer((req, res) => {
    res.write(200);
    res.end(res.header);
  })
  .listen(8000);

// 5) create a server and set status code 202 in response.
const http = require("http");

http
  .createServer((req, res) => {
    res.write(200);
    res.end("status code 202");
  })
  .listen(8000);
