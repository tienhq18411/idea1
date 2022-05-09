const express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000,() =>{
    console.log('Server on port');
});