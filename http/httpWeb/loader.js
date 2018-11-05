const fs = require('fs');
const globalConf = require("./config");
const controllerSet = [];
const kArr = [];
const pathMap = new Map();
const files = fs.readdirSync(__dirname + "/" + globalConf["web_path"]);
for (let i = 0; i < files.length; i++ ) {
    const temp = require("./" + globalConf["web_path"] + "/" + files[i]);
    controllerSet.push(temp);
    // 避免web文件含有未配置的path
    if(temp.path) {
        for (const [k, v] of temp.path) {
            pathMap.set(k, v);
            kArr.push(k);
        }
    }
}
//避免web各路径中有重复url配置
const flag = (() => {return pathMap.size !== kArr.length})();

if(flag) {
    throw new Error("url 配置异常");
}
// console.log(pathMap);
//
// console.log(controllerSet);
module.exports = pathMap;
