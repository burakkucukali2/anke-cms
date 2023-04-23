const Service = require('../models/Service');
const asyncErrorWrapper = require('express-async-handler');

const getAllServices = asyncErrorWrapper(async (req, res) => {
    const services = await Service.find();

    res.status(200).json({
        success: true,
        data: services
    });
});

const addService = asyncErrorWrapper(async (req, res) => {
    const {name, suffix, imgSrc} = req.body;

    const service = await Service.create({
        name,
        suffix,
        imgSrc
    });

    res.status(200).json({
        success: true,
        data: service
    });
});

module.exports = {
    getAllServices,
    addService
}