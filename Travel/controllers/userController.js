const _async = require('async');
const Service = require("../services");
const Config = require('../config');

let createUser = (req,callback) => {
    console.log("test",req.body)
    let userData;
    _async.series([
        function(cb) {
            let query = { email: req.body.email }
            Service.UserService.getUser(query, {}, {}, (err,data) => {
                if(err) {
                    console.log("teasta",err)
                    cb(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
                }
                else {
                    if(data.length > 0) {
                        cb(Config.APP_CONSTANTS.STATUS_MSG.ERROR.USER_ALREADY_EXIST)
                    }
                    else {
                        cb()
                    }
                }
            })
        },

        function(cb) {
            let dataToSave = {}
            dataToSave = req.body;
            Service.UserService.createUser(dataToSave,(err,data) => {
                if(err) {
                    console.log("test",err)
                    cb(Config.APP_CONSTANTS.STATUS_MSG.ERROR.CREATE_USER_ERROR)
                }
                else {
                    userData = data
                    cb()
                }
            })
        }
    ],
    function(error,success) {
        if(error) {
            callback(error)
        }
        else {
            callback(null,userData)
        }
    })
}

module.exports = {
    createUser: createUser
}