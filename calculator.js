const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine','ejs');

var info;
var results;

const https = require("https");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render('index');
});


app.get("/search", function(req, res) {
  res.render('search',{list : results});
});

app.post("/", function(req, res) {
  const url="https://api.themoviedb.org/3/search/movie?api_key=f0b560864d5cd8377fe844801ae4e67d&query="+req.body.searchtext+"&include_adult=false";
  https.get(url,function(response){
    response.on('data',function(data){
    info=JSON.parse(data);
    results=info.results;
    });
  });
  setTimeout(function () {
      res.redirect('/search');
    }, 8000);

});




app.listen(process.env.PORT || 3000, function() {
  console.log("server started");
});
