var Models = require('../models');

//getUsers from DB
var getUser = function (criteria, projection, options, callback) {
    Models.User.find(criteria, projection, options, callback);
};

//Create user in DB
var createUser = function (objToSave, callback) {
    new Models.User(objToSave).save(callback)
};

module.exports = {
    getUser: getUser,
    createUser: createUser
}