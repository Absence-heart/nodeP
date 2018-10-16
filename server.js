var net = require("net");
var server = net.createServer();
server.listen(12306, "127.0.0.1");
server.on("listening", function() {
    console.log(server.address());
    console.log("服务已启动");
})
server.on("connection", function (socket) {
    console.log("有新的连接");
    socket.on("data", function (data) {
        console.log(data.toString());
        socket.write("hello, client!");
        server.close();
    })
})

/***事件
 * listening
 * connection
 * close
 * error
 * **方法
 * listen
 * close
 * address
 */