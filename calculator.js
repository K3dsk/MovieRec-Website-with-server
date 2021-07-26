const express= require("express");
const app= express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const https=require("https");
app.use(express.static("public"));

app.get("/",function(req,res){

 https.get("https://api.coindesk.com/v1/bpi/currentprice.json",function(response){
   response.on("data",function(data){
     const bitcoin = JSON.parse(data);

     const rate= bitcoin.bpi.USD.rate;
     res.sendFile("/Users/vasu_/Desktop/myServer/index.html");

   });
 });


});

app.post("/",function(req,res){
  console.log(req.body.searchtext);
});




app.listen(process.env.PORT || 3000,function(){
  console.log("server started");
});
