const url = require('url');
const studentService = require('../servcie/studentService');
const path = new Map();

const loginConfirm = (request, response) => {
    let params = url.parse(request.url, true).query;
    // console.log(params);
    studentService.loginHandle(params.username, function (result) {
        let str = "";
        if(result[0]){
            let [{stu_pwd}] = result;
            if(stu_pwd === params.password) {
                str = "OK";
            }else {
                str = "FAIL";
            }
        }else{
            str = "FAIL";
        }
        response.write(str);
        response.end();
    });
};
path.set("/login", loginConfirm);
module.exports.path = path;