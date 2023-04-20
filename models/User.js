const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    } ,
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            'Please provide a valid email'
        ]
    } ,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Please provide a password with min length 6'],
        select: false
    } ,
    role: {
        type: String,
        default: 'user',
        enum: [ 'user', 'admin' ],
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    },
    blocked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);

