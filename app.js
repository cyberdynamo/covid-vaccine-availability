var express = require("express");
var app =  express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/mainPage", function(req, res){
    res.render("mainPage");
})

app.get("/error", function(req, res){
    res.render("error");
})

app.get("/about", function(req, res){
    res.render("about");
})

// process.env.PORT
app.listen(3000, function(){
    console.log("App Started");
});