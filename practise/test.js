// require("./index.js");
// module.exports = {a: "shabi"}
var fs = require("fs");
var data = fs.readFileSync(__dirname + "/test.conf").toString();
console.log(data);