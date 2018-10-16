var net = require("net");

var socket = net.connect(12306, "127.0.0.1");
socket.on("connect", function () {
    console.log("已连接到服务器");
    console.log(socket.remoteAddress)
    console.log(socket.remotePort)
    console.log(socket.localAddress)
    console.log(socket.localPort)

});
socket.on("data", function (data) {
    console.log(data.toString());
    // socket.end();
})
socket.on("close", function () {
    console.log("客户端已关闭");
})
socket.write("hello, server!");
/*****事件： 
 * connect
 * data
 * end
 * timeout
 * error
 * close
 * ***属性
 * remoteAddress
 * remotePort
 * localAddress
 * localPort
 * ***方法
 * setTimeout
 * write
 * setEncoding
 * end
 * ***/