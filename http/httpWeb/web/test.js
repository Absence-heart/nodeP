const fs = require('fs');
const path = new Map();
const getData1 = (request, response) => {
    console.log("haha");
}
const getData2 = () => {
    console.log("hehe");
}
path.set("/getData", getData1);
path.set("/getData2", getData2);
module.exports.path = path;