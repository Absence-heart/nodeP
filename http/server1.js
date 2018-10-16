var net = require("net");
var fs = require("fs");
var globalConf = require("./web/config.js");
var server = net.createServer();
// console.log(globalConf);
// console.log(arguments);
let path_g = globalConf.path;
let port_g = globalConf.port;
server.listen(port_g, "127.0.0.1");

server.on("listening", function() {
    console.log("服务已启动");
})
server.on("connection", function (socket) {
    console.log("有新的连接");
    socket.on("data", function (data) {
        // console.log(data.toString());
        var request = data.toString().split("\r\n");
        // console.log(request);
        var url = request[0].split(" ")[1].slice(1);
        // console.log(url,globalConf.path);
        //此处如用globalConf.path替代'\\web' 则会出错，route 路径显示不全
        var route = __dirname + "\\web" + '\\' + url;
        // var sb = globalConf.path + url;
        console.log(route);
        // console.log(sb);
        
        try{

            var dataFile = fs.readFileSync(route);
            socket.write('HTTP/1.1 200OK\r\n\r\n');
            socket.write(dataFile);
            socket.end();
        } catch (e) {
            socket.write('HTTP/1.1 404NOTFOUND\r\n\r\n<html><body><h1>404 Not Found</h1></body></html>')
            socket.end();
        }
    })
})