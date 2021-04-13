const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
  user: "root",
  password: "password",
  database:"todo"
})

app.get('/', (req,res)=>{
    const sqlInsert = "INSERT INTO dolist (task) VALUES ('study');";
    db.query(sqlInsert,(err,result)=>{
        res.send("hello world")
    })
   
})

app.listen(3001,()=>{
    console.log("server running");
});