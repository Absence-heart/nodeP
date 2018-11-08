const fs = require('fs');
const globalConf = require("./config");
const filterSet = [];
const files = fs.readdirSync(__dirname + "/" + globalConf["filter_path"]);
for (let i = 0; i < files.length; i++ ) {
    const temp = require("./" + globalConf["web_path"] + "/" + files[i]);
    filterSet.push(temp);

}

module.exports = pathMap;
