const Promise = require("bluebird");
const mysql = require("mysql");
const express =require("express");
const app = express();
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let readuser = async () =>{
    try{
        const connection = await mysql.createConnection(config.DB_CONFIG);

        await connection.connectAsync();

            let sql = "select * from user";
            let result = await connection.queryAsync(sql);

        await connection.endAsync();
        return result;
    }catch(err){
console.log(err);
    };
  
};
module.exports ={readuser};