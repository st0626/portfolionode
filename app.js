const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const PORT = 5000;


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/", function(req, res){
    res.render("index");
});








app.listen(PORT, function(){
    console.log("server started on port 3000");
});