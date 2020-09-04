const Promise =require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG={
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb",
};
let addRecordWithJsonParam = async (user) => {
    const connection = mysql.createConnection(DB_CONFIG);
  
    await connection.connectAsync();
  
    let sql =
      "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
      user.username,
      user.password,
      user.email,
      user.mobile,
    ]);
  
    await connection.endAsync();
  };
    //addRecordWithJsonParam();
  module.exports ={ addRecordWithJsonParam };