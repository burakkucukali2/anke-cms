const Project = require('../models/Project');

const errorWrapper = require("../helpers/error/errorWrapper");

const getAllProjects = errorWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder || 'desc';

    const count = await Project.countDocuments();
    const totalPages = Math.ceil(count / limit);
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    const projects = await Project.find()
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .populate('categories');

    res.status(200).json({
        projects: projects,
        currentPage: page,
        totalPages: totalPages,
        totalProjects: count,
    });
});

const addNewProject = errorWrapper(async (req, res) => {
    const {name, projectOwner, location, structureFeature, projectFeature, totalArea, moldArea, ironAmount, concreteAmount, imgSrc, startDate, endDate, categories} = req.body;

    const project = await Project.create({
        name,
        projectOwner,
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

const getProjectById = errorWrapper(async (req, res) => {
    const {id} = req.params;
    const project = await Project.findById(id).populate('categories');

    res.status(200).json({
        success: true,
        data: project
    });
});

const updateProjectById = errorWrapper(async (req, res) => {
    const {id, name, projectOwner, location, structureFeature, projectFeature, totalArea, moldArea, ironAmount, concreteAmount, imgSrc, startDate, endDate, categories} = req.body;

        const project = await Project.findByIdAndUpdate(id, {
            name,
            projectOwner,
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
    getProjectById,
    addNewProject,
    updateProjectById
}