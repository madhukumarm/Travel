const express = require('express');
const router = express.Router();

//User Model
const User = require('../models/User');

//@route GET api/user
//@desc Get user details

router.get('/getUsers',(req,res) => {
    User.find()
        .then(user => res.json(user))
});

//@route POST api/users
//@desc create a user
router.post('/register',(req,res) => {
    const newUser = new User({
        username: req.body.userame,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    });

    newUser.save().then(user => res.json(user));
});

//@route DELETE api/users/:id
router.delete('/:id',(req,res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true}))
        .catch(err => res.Status(404).json({success: false})));
})


module.exports = router;