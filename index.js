// jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('views'));

app.get('/',function(req,res){
    res.render("index");
});


app.listen(3000,function(){
    console.log("Server started on port 3000");
});
