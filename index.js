// jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('views'));

app.get('/',function(req,res){
    res.render("index", { user:0, vertex: "Person",edges: "Cash"});
});

app.post("/",function(req,res){
    const vertex = req.body.vertex;
    const edges = req.body.edges;
    res.render("index",{ user: 1,vertex: vertex,edges: edges});
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000");
});
