var fs = require('fs');
// console.log(fs)
var globalConf = {};
var conf = fs.readFileSync(__dirname + '/serverconfig.conf');
var confs = conf.toString().split("\n");
confs.forEach((item) => {
    var tempConf = item.split("=");
    globalConf[tempConf[0]] = tempConf[1];
})
module.exports = globalConf;