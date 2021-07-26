const express=require("express");
const app= express();

app.get("/home",function(req,res){
  res.send("Welcome");
});


app.listen(3000,function(){
  console.log("server started");
});
