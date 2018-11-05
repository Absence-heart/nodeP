const fs = require('fs');
const globalConf = require("./config");
const filterSet = [];
const files = fs.readdirSync(__dirname + "/" + globalConf["web_path"]);
for (let i = 0; i < files.length; i++ ) {
    const temp = require("./" + globalConf["web_path"] + "/" + files[i]);
    filterSet.push(temp);
    // 避免web文件含有未配置的path
    if(temp.path) {
        for (const [k, v] of temp.path) {
            pathMap.set(k, v);
            kArr.push(k);
        }
    }
}

module.exports = pathMap;
