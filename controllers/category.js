const Category = require('../models/Category');
const Project = require('../models/Project');
const asyncErrorWrapper = require('express-async-handler');

const addCategory = asyncErrorWrapper(async (req, res) => {
   const {name} = req.body;

        const category = await Category.create({
            name
        });

        res.status(200).json({
            success: true,
            data: category
        });
});

const getAllCategories = asyncErrorWrapper(async (req, res) => {
        const categories = await Category.find();

        res.status(200).json({
            success: true,
            data: categories
        });
});

const getProjectsByCategoryId = asyncErrorWrapper(async (req, res) => {

    const categoryId = req.params.categoryId
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder || 'desc';

        const count = await Project.countDocuments({ categories: categoryId });
        const totalPages = Math.ceil(count / limit);
        const sort = {};
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const projects = await Project.find({ categories: categoryId })
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

module.exports = {
    getAllCategories,
    getProjectsByCategoryId,
    addCategory
}