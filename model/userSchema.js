const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const labSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    role:
    {
        type: String,
        required: true
    },
    test:
    {
        type: String,
        required:true
    }

})

module.exports = mongoose.model('users', labSchema);