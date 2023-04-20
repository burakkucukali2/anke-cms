const Project = require('../models/Project');
const asyncErrorWrapper = require('express-async-handler');

const getAllProjects = asyncErrorWrapper(async (req, res, next) => {
    const projects = await Project.find();
    res.status(200).json({
        success: true,
        data: projects
    });
});

const addNewProject = asyncErrorWrapper(async (req, res, next) => {
    const {name, location, structureFeature, projectFeature, totalArea, moldArea, ironAmount, concreteAmount, imgSrc, startDate, endDate, categories} = req.body;

    const project = await Project.create({
        name,
        location,
        structureFeature,
        projectFeature,
        totalArea,
        moldArea,
        ironAmount,
        concreteAmount,
        imgSrc,
        startDate,
        endDate,
        categories
    });

    res?.status(200).json({
        success: true,
        data: project
    });
});

const updateProjectById = asyncErrorWrapper(async (req, res, next) => {
    const {id, name, location, structureFeature, projectFeature, totalArea, moldArea, ironAmount, concreteAmount, imgSrc, startDate, endDate, categories} = req.body;

        const project = await Project.findByIdAndUpdate(id, {
            name,
            location,
            structureFeature,
            projectFeature,
            totalArea,
            moldArea,
            ironAmount,
            concreteAmount,
            imgSrc,
            startDate,
            endDate,
            categories
        }, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            data: project
        });
});

module.exports = {
    getAllProjects,
    addNewProject,
    updateProjectById
}