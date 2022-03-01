const express = require('express')
const router =  express.Router();

const userdetails = require('../controller/user')


router.get('/register',userdetails.register);

module.exports=router;