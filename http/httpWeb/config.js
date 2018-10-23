const fs = require('fs');
const config = fs.readFileSync(__dirname + '\\server.conf').toString().split('\r\n');
const globalConf = {};
for(let i =0; i < config.length; i++) {
    var temp = config[i].split('=');
    globalConf[temp[0]] = temp[1];
}
if (globalConf.static_file_type) {
    globalConf.static_file_type = globalConf.static_file_type.split('|');
} else {
    throw new Error("配置文件异常: static_file_type不存在");
}
module.exports = globalConf;

