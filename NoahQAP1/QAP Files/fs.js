// the fs module allows you to access the contents of any file in your current project
// for example this function allows me to access the index.html file from the fs.js file

var http = require("http");
var fs = require("fs");

serveFile("index.html");

function serveFile(filename) {
  http
    .createServer(function (req, res) {
      fs.readFile("index.html", function (err, data) {
        if (err) console.log(err);
        else {
          console.log("file " + filename + " was served sucessfully");
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    })
    .listen(3000);
}
