const mongoose = require('mongoose');

const schema = mongoose.Schema;

const accountSchema = mongoose.Schema({
    username: String,
    password: String, 
    roles: String,
}, {
    collection : 'accounts'
});

const accountModel = mongoose.model('accounts', accountSchema)

module.exports = accountModel