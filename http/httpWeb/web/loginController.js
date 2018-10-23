const fs = require('fs');
const path = new Map();
const getData1 = (request, response) => {
    console.log(response)
}
const getData2 = () => {
    console.log("haha");
}
path.set("/login.js", getData1);
path.set("/getData2", getData2);
module.exports.path = path;