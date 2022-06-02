const express = require('express');
const app = express();
const port = 8080
app.get('/',(req,res)=>{
    res.send("send");
})




app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
})