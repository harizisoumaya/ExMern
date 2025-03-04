const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
        name: {
        type: String,
        required: true,
        },
        email: {
        type: String,
        required: true,
        unique: true
        },
        password: {
        type: String,
        required: true,
        },
       
        avatar :{
        type: String,
        required: false
        },
        isActive: {
        type: Boolean,
        default: false,
        required: false
        },
        },
        {
        timestamps: true,
        },
        )
module.exports = mongoose.model('User', userSchema)