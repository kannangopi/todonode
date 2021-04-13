const express = require('express');
const app = express();
const mysql = require(mysql);

const db = mysql.createPool({
    
})

app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(3001,()=>{
    console.log("server running");
});