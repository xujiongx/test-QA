const express=require('express')
var app=express();

app.get("/test",(req,res)=>{
    res.send({
        data:"Hello test😘"
    })
})

const serve=app.listen(3000,()=>{
    console.log("server is running🎃")
})

module.exports=app;