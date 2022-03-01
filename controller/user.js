const express = require('express');
// const router = express.Router();
const database = require('../DB/connection')

const register = async (req,res,next) => {
    try{
        console.log(req.body);
        res.send('hfjghjhhi')
    } catch(err) {
        console.log(err);
    }
};

module.exports = {
    register,
};
