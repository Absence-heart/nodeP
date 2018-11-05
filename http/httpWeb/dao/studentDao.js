const { createConnection } = require('./dbutil');
const queryStudent = function (stuNum, success) {
    let querySql = "select * from students where stu_num = ?";
    //每次登陆创建数据连接
    let connection = createConnection();
    connection.query(querySql, stuNum, function (err, result) {
       if (err) throw new Error(err);
       // console.log(result);
       success(result);
   });
    connection.end();
};
module.exports = {queryStudent};