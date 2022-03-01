const { response } = require('express');
const express = require('express')
const router = express.Router();
require('../DB/connection');
const userSchema = require('../model/userSchema')

console.log('inside auth');

//home page
router.get('/rr', (req, res) => {
    res.send(" welcome to home page")
})

router.post('/register', (req, res) => {
    const { uname, email, password, role } = req.body;
    console.log(req.body)
    if (!uname || !email || !password || !role) {
        return res.status(422).json({
            error: " fill all fields"
        })
    }
    userSchema.findOne({ email: email }).then((emailExists) => {
        if (emailExists) {
            res.status(422).json({
                eror: "email allready exists"
            })
        }
        else {
            const user = new userSchema({ uname, email, password, role })
            user.save().then(() => {
                res.status(201).json({ message: "user reg successfully" })
            }).catch(err => {
                res.status(500).json({ error: "Failed to register" })
            })
        }
    })


})

router.post('/login', (req, res) => {
    const { email, password } = req.body
})

router.get('/sample',(res,req) => {
    console.log(req.body);

    res.send('inside sample')
})




module.exports = router;