const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const account  = mongoose.Schema({
    username: String,
    password: String, 
    roles: String,

});

module.exports = mongoose.model('account ', account);

