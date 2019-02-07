// const fs = require('fs');

// let data = fs.readFileSync('catlog.json');

// let jsonData = JSON.parse(data);

var bodyParser = require('body-parser');

var dbProduct = require('mongoose');

var dbUser = require('mongoose');

dbProduct.Promise = global.Promise;

dbProduct.connect('mongodb://cartwp:cartwp123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });

dbUser.connect('mongodb://userdb:userdb123@ds113871.mlab.com:13871/cartwp',{ useNewUrlParser: true });

var productSchema = new dbProduct.Schema({
    products: [{
        name: String,
        price: Number,
        description: String,
        quantity: Number,
        reviews:[{body: String, rating: Number}]
        }]
});

// var userSchema = new dbUser.Schema({
//     name: String,
//     email: String,
//     pwd: String,
//     phone: Number,
//     address: String,
//     balance: Number,
//     prod: [String],
//     quantity: [Number],
//     price: [Number]
// });

var prods = dbProduct.model('Prods', productSchema);

// var allProds = prods(jsonData).save(function(err){
//     try{
//         console.log("stored on db");
//     } catch(err) {
//         console.log(err);
//     }
// });

module.exports = function(app) {

    app.use(bodyParser.urlencoded({extended:false}));

    app.use(bodyParser.json());
    
    app.get('/', function(req, res){
        prods.find({}, function(err, data){
            try {
                console.log(data);
                res.send(data);
            } catch(err) {

            }
        });
    });
    app.post('/', function(req, res) {
        var newProd = prods(req.body).save(function (err, data){
            try {
                console.log(data);
                res.send(data);
            } catch(err) {
            }
        });
    });
}