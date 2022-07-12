const account = require('../models/accounts')

module.exports = {
    login: function (req, res, next){
        res.render('login');
    },
    postLogin: function (req, res, next){
        var username = req.body.username;
        var password = req.body.password;

        account.findOne({ 
            username: username,
            password: password
        })
        .then(data => {
            if (data){
                res.json('thanh cong')
            }else{
                res.json('that bai')
            }
        })
        .catch(error =>{
            res.status(500).json('loi server')
        })
    },
    register: function (req, res, next){
        res.render('register');
    },
    postRegister: function(req, res, next){
        var username = req.body.username;
        var password = req.body.password;

        account.create({
            username: username,
            password: password
        })
        .then(data =>{
            res.json('tạo tài khoan thanh cong')
        })
        .catch(error=>{
            res.status(500).json('loi server')
            })
    }
    
}
