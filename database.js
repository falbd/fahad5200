const {createPool} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"PVOPPjlO7NQn(1dT",
    database:"joicestation",
    connectionLimit: 10
})

console.log("database is connected");

 pool.query("select * from user_auth" , (err , result , fields)=>{
     if(err){
         return console.log(err);
     }
     return console.log(result);
 })
   console.log("my name is fahad");
