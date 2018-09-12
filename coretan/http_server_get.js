var http=require('http');
var messages=[
  'Hello World',
  'From a basic node.js server',
  'take Luck'
];
http.createServer(function(req, res){
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.write('<html><head><tile>Kancut dina celana</title></head>');

});
