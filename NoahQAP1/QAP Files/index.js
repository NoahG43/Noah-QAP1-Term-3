// using the http core module allows you to create a basic web server for your codes
// select a port like 3000 to run your server on and have it listen for any changes in your code and it will update once
// the site is saved and refreshed

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Peter, This is an http server");
});

server.listen(port, () =>
  console.log(`server started at port: ${port}, press ctrl c to terminate`)
);
