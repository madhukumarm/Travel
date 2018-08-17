const express = require('express');
const router = express.Router();
const Controller = require("../controllers");
//User Model
const Models = require('../models');

//@route GET api/user
//@desc Get user details

router.get('/getUsers',(req,res) => {
    Models.User.find()
        .then(user => res.json(user))
});

//@route POST api/users
//@desc create a user
router.post('/register',(req,res) => {
    Controller.userController.createUser(req,(err,data) => {
        if(err){
            res.status(err.statusCode).send(err);
        }
        res.send(data);
    });
}); 

//@route DELETE api/users/:id
router.delete('/deleteUser/:id',(req,res) => {
    Models.User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true}))
        .catch(err => res.Status(404).json({success: false})));
})


module.exports = router;