const http = require("http");
const fs = require("fs");
const url = require("url");

const static = require("node-static");

const fileserver = new static.Server('./files');

const server = http.createServer(
  function (req, res) {
    console.log("requsted url :" + req.url);
    var url1 = url.parse(req.url, true);
    if (url1.pathname == "/Q-1.html") {

      fs.readFile("./files/Q-1.html", (err, data) => {
        if (err) {
          res.writeHead(404, { 'content-type': "text/html" })
         return  res.end("404 file not found")
        }
    
          res.writeHead(200, { 'content-type': "text/html" })
        res.write(data);
        
        res.end();
        

      });
    }
    else if (url1.pathname == "/submit" && req.method == "POST")
   {
      let body = '';
      req.on('data', postdata => {
        body += postdata.toString();
      });
      req.on('end', function () {
        res.write(body);
        res.end();
      });
    }
    else if (url1.pathname == "/process" && req.method == "GET")
   {
      res.write("your first name is :  " + url1.query.fname + "  your last name is : " + url1.query.lname);
      res.end();
    }
    else {
      res.write("error while running");
      res.end();
    }

    req.addListener('end', function () {
      fileserver.serve(req, res);
    }).resume();

  });

server.listen(8080, () => {
  console.log("listening to port 8080");
})
