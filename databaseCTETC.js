const express = require("express")

const mysql = require("mysql")


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"PVOPPjlO7NQn(1dT",
    database:"fcorp"
}) 

console.log("databaseCTETC is connected");

  //con.connect(function(err){
  //  if(err){
       //  console.log(err)
     // }else{
         //var sql = "CREATE TABLE foodlist (id int , resturentname varchar(60) , price int , calories int )";
         //var sql = "CREATE TABLE ourcustomers (id int , resturentname varchar(60) , price int , calories int )";
         //var sql = "INSERT INTO ourcustomers (`id`, `name`, `age`, `email`) VALUES ('5','saad','30','saad@gmail.com')";
        // var sql = "INSERT INTO foodlist (id , resturentname , price , calories) VALUES ('6' , 'macdonalds' , '35' , '1000')";
         //var sql = "UPDATE ourcustomers SET `id`='6',`name`='saad',`age`='25',`email`='saad@gmail.com' WHERE id = '5'";
        // var sql = "UPDATE foodlist SET `id`='8',`resturentname`='macdonalds',`price`='25',`calories`='850' WHERE id = '6'";
           //var sql = "DELETE FROM ourcustomers WHERE id = '4'";
          // var sql = "DELETE FROM foodlist WHERE id = '4'";
      //  con.query(sql,(err,result)=>{
           //  if(err) 
          //  {
            //  console.log(err)
           // }else{
              // console.log("insert into table ourcustomers created")
               //console.log("insert into table foodlist created")
               //console.log("update into table ourcustomers created")
               //console.log("delete into table ourcustomers created")
              // console.log("update into table foodlist created")
               

          //  }
        // })
    // }
  //}
  //)




  con.query("select * from ourcustomers" , (err , result , fields)=>{
      if(err){
         return console.log(err);
     }
      return console.log(result);
 })



 con.query("select * from foodlist" , (err , result , fields)=>{
     if(err){
         return console.log(err);
    }
     return console.log(result);
 })
