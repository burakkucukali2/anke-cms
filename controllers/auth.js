const User = require('../models/User');

const asyncErrorWrapper = require('express-async-handler');
const register = asyncErrorWrapper(async (req, res, next) => {

    // Create new user
const name = "Burak";
const email = "brkkasdali@gmail.com";
const password = "123356";

    const user = await User.create({
        name,
        email,
        password
    });
    res.status(200).json({
        success: true,
        data: user
    });
});

module.exports = {
    register
}