const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');



const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/projects", function(req, res){
    res.render("projects");
});






app.listen(process.env.PORT || 5000);