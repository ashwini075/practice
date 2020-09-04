const Promise =require("bluebird");
const mysql =require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config =require("./config");
let adduser = async () => {
  try{
    const connection = mysql.createConnection(config.DB_Config);
  
  await connection.connectAsync();

        let sql =
          "INSERT INTO USER (NAME, EMAIL, MOBILE) VALUES ( ?, ?, ?)";
          await connection.queryAsync(sql, [
          "sai",
          "p@gmail.com",
          "7894568263",
          null
        ]);
  await connection.endAsync();
  return;

}catch(err){
  console.log(err);
};

};
//adduser();

module.exports = {adduser}; 
   