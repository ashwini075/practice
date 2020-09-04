const Promise =require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG={
    host: "localhost",
    user: "root",
    password: "123456",
    database: "dac20",
};
let readAlluser = async () =>{
    try{
        const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

      let sql ="Select * from user";
      const result = await connection.queryAsync(sql,[]);
      console.log(result);
    await connection.endAsync();
      return result;
      

    }catch(err){
        console.log("failure",err);
    };
    
};
//readAlluser();
module.exports ={readAlluser};