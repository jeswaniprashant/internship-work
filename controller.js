const user = require('./user.js')
const jwt = require('jsonwebtoken')

module.exports = {
    create: (req, res, next) => {
        user.create({userName: req.body.username, password: req.body.password}, (error, results) => {
            if(error) next(error);
            else {
                res.json({status: "success", message: "user created"});
            }
        });
    },
    autenticate: (req, res, next) => {
        user.findOne({userName: req.body.username}, (error, userInfo) => {
            if(error) next(error);
            else {
                if(user.password == req.body.password) {
                    const token = jwt.sign({id: user._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json({status: "success", message:"User is valid", userToken: token})
                } else {
                    res.json({status: 'invalid', message: 'Invalid credentials'})
                }
            }
        })
    }
}