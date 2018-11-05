const http = require('http');
const globalConf = require('./config');
const fs = require('fs');
const url = require('url');
const loader = require("./loader");
const log = require("./log");
// console.log(globalConf);
http.createServer((request, response) => {
    var pathName = url.parse(request.url, true).pathname;
    // console.log(pathName);
    // var params = url.parse(request.url, true).query;
    var isStatic = isStaticRequest(pathName);
    if(isStatic) {//请求静态文件
        try {
            let data = fs.readFileSync(__dirname + '/' + globalConf["page_path"] + pathName);
            response.writeHead(200);
            response.write(data);
            response.end();
        } catch (error) {
            response.writeHead(404);
            response.write(`<html><body><h1>404 Not Found</h1></body></html>`);
            response.end();
        }
    }else{//请求动态文件       
        if(pathName) {
            // console.log(pathName);
            // console.log(loader);
            if(loader.get(pathName)){
                // console.log(loader.get(pathName));
                loader.get(pathName)(request, response);
            }else {
                response.writeHead(500);
                response.write(`<html><body><h1>500 Bad Server</h1></body></html>`);
                response.end();  
            }
        }else {
            response.writeHead(404);
            response.write(`<html><body><h1>404 Not Found</h1></body></html>`);
            response.end(); 
        }
    }
}).listen(globalConf['port']);
log("服务已启动");
function isStaticRequest(pathName) {
    const static_file_type = globalConf.static_file_type;
    for (let i = 0; i < static_file_type.length; i ++) {
        if (pathName.lastIndexOf(static_file_type[i]) === pathName.length - static_file_type[i].length){
            return true
        }
    }
    
}
