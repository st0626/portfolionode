const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


//Nodemailer stuff


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'st06266@gmail.com',
      pass: 'dkdywqgbixfebeyl'
    }
  });

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

app.post('/', function(req, res){
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let phoneNum = req.body.phone;
    let email = req.body.email;
    let desc = req.body.description;
    console.log({
    first: firstName,
    last: lastName,
    phone: phoneNum,
    email: email,
    description: desc
    });

    let mailOptions = {
        from: email,
        to: 'st06266@gmail.com',
        subject: 'Nodemailer: from ' + email,
        text: firstName + " " + lastName + "\n" + phoneNum + "\n" + desc
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log("Email Sent: " + info.response);
            res.render("success");
        }
    });


});
// 404 handler
app.use(function (req, res, next){
    res.status(404).render('404');
});


app.listen(process.env.PORT || 5000);