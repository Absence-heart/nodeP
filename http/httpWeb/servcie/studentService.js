
const studentService = require('../dao/studentDao');
// console.log(studentService.queryStudent(111, 111111));
const loginHandle = function (stuNum, success) {
    studentService.queryStudent(stuNum, success);
};
module.exports = {loginHandle};