const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "dac20",
};

let addRecord = async () => {
    try{
        const connection = mysql.createConnection(DB_CONFIG);
        await connection.connectAsync();
      
        // LOGIC
        let sql =
          "INSERT INTO USER (NAME, EMAIL, MOBILE) VALUES( ?, ?, ?)";
        let operation = await connection.queryAsync(sql, [
         
          "Shruti Jamdade",
          "shruti@gmail.com",
          "3456789012",
        ]);
        

        await connection.endAsync();
        //return operation;
        console.log("success");
    }catch(err){
        console.log(err);
    };
  
};

addRecord();