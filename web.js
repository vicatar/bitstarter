var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
var data = Buffer(256);
data = fs.readFileSync( infile );
console.log("Script: " + __filename + "\nRead: " + data + "From: " + infile);

app.get('/', function(request, response) {
    response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
