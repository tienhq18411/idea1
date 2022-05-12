const express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


require('./models/db');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res, next) =>{
    res.json('home')
})

var router1 = require('./controller/authController.js');



app.listen(3000,() =>{
    console.log('Server on port');
});