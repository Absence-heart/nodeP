var http = require('http');
var url = require('url');
http.createServer((req, res) => {
    console.log(req.url)
}).listen(12306);