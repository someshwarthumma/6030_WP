var express = require('express');
var parser = require('body-parser');
var urlencoded = parser.urlencoded({extended:false});
var app = express();
const obj = JSON.parse('[{"title": "OnePlus 6T (Mirror Black, 6GB RAM, 128GB Storage)","price": 50000, "description": "Camera: 16+20 MP Dual rear camera with Optical Image Stabilization, Super slow motion, Nightscape and Studio Lighting | 16 MP front camera","image": "0.jpeg","quantity":"10"}, {"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue", "price": 20000, "description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10"},{"title": "Mi A2 4GB + 64GB | 6GB + 128GB","price": 40000, "description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20"},{"title":"Apple iphone 32GB","price": 12000, "description":"11.4 cm(4.7)display","image":"3.jpeg","quantity":"30"},{"title":"red mi note 6 pro","price": 35000, "description":"15.9 cm (6.26 inch) FHD+ Display with Resolution ","image":"4.jpeg","quantity":"40"}]');
var jsonparser = parser.json();
var clientDetails = [];
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/home', (req, res) => {
    console.log(req.url);
    res.send(obj);
});

app.post('/signup', jsonparser, (req, res) =>  {
    clientDetails.push(req.body);
    res.send(true);
});

app.post('/login', jsonparser, (req, res) => {
    console.log(req.url);
    console.log("hello");
    console.log(req.body);
    for(var i = 0; i < clientDetails.length; i++) {
        if((req.body.name === clientDetails[i].name)&&(req.body.password === clientDetails[i].password)) {
                res.send(true);
                return;
        }
    }
    res.send(false);
});


app.listen(4201, '127.0.0.1', function(){
    console.log("server is  listening 4201");
});