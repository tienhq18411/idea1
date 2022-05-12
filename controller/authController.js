const accountModel = require('../models/accounts.js');

module.exports = {

    getRegister: function (req, res, next){
        res.render('/register');
    },
    postRegister: async function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var role = req.body.role;

        account.findOne({
            username :username
        })
        .then((data) =>{
            if(data){
                res.json('user da ton tai');
            }
            else{
                return account.create({
                    username :username,
                    password :password,
                    role :role
                })
            }
        })
    

    }
}
