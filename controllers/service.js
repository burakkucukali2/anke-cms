const Service = require('../models/Service');

const errorWrapper = require("../helpers/error/errorWrapper");

const getAllServices = errorWrapper(async (req, res) => {
    const services = await Service.find();

    return res.status(200).json({
        success: true,
        data: services
    });
});

const addService = errorWrapper(async (req, res) => {
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