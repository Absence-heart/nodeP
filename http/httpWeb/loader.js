const fs = require('fs');
const globalConf = require("./config");
const controllerSet = [];
const pathMap = new Map();
const files = fs.readdirSync(__dirname + "/" + globalConf["web_path"]);
for (let i = 0; i < files.length; i++ ) {
    const temp = require("./" + globalConf["web_path"] + "/" + files[i]);
    controllerSet.push(temp);
    if(temp.path) {
        for (const [k, v] of temp.path) {
            pathMap.set(k, v);
        }
    }
}
console.log(controllerSet)
module.exports = pathMap;
