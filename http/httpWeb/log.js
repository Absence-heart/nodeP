const fs = require('fs');
const globalConfig = require('./config');
const fileName =__dirname + "/" + globalConfig.log_path + globalConfig.log_name;

const mogan = (data) => {
    fs.writeFile(fileName, data + new Date() + "\n", { flag: "a" }, () => {
        // console.log("done");
    });
};
module.exports = mogan;
// fs.writeFileSync(fileName, "ads")
