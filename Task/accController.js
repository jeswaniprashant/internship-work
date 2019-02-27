const accountModel = require('./accounts.js');

module.exports = {
    getById: (req, res, next) => {
        accountModel.findById(req.params.accountId, (error, accountInfo) => {
            if(error) next(error);
            else {
                res.json({staus: 'found', message: 'data found', data:{account: accountInfo}});
            }
        });
    },

    getALL: (req, res, next) => {
        let accountsArray = [];

        accountModel.find({}, (error, accounts) => {
            if(error) next(error);
            else {
                for (let account of accounts)
                {
                accountsArray.push({id: account._id, number: account.number, type: account.type});
                }
                console.log(accountsArray);
            }
            res.json({status: "success", data:{accounts: accountsArray}});
        })
    },

    updateById: (req, res, next) => {
        accountModel.findByIdAndUpdate(req.params.accountId, {number: req.body.number}, {type: req.body.type},(error, accountInfo) => {
            if(error) next(error);
            else {
                res.json({status: "success", message:"data updated successfully"});
            }
        });
    },

    deleteById: (req, res, next) => {
        accountModel.findByIdAndRemove(req.params.accountId, (error, accountInfo) => {
            if(error) next(error);
            else {
                res.json({status: "success", message:"data removed successfully"})
            }
        })
    },

    create: (req, res, next) => {
        accountModel.create({number: req.body.number, type: req.body.type}, (error, result) => {
            if(error) next(error);
            else {
                res.json({status: "success", message: "Account added successfully"});
            }
        })
    }
}