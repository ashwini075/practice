const Promise = require("bluebird");
const mysql = require("mysql");
const express =require("express");

const app = express();
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let addRecord = async (input) => {
    const connection = mysql.createConnection(config.DB_CONFIG);
    await connection.connectAsync();
  
    let sql =
      "INSERT INTO USER (NAME, EMAIL, MOBILE) VALUES (?, ?, ?)";
    await connection.queryAsync(sql, [
      input.name,
      input.email,
      input.mobile,
    ]);
  console.log("success");
    await connection.endAsync();
  
    return;
  };
  
  module.exports = { addRecord };