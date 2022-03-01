// const database = require("../model/dataSchema");
// const jwt = require("jsonwebtoken");

const Auth = async (req, res) => {
    console.log("in auth");
    const token = req.cookies.token;
    console.log(token);
  };
  
  module.exports = Auth;