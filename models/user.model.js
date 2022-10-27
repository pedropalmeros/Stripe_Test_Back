const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    }
});

module.exports = model('User',UserSchema);