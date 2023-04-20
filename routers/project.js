const express = require('express');
const { getAllProjects, addNewProject, getProjectById, } = require('../controllers/project');

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/add-new-project', addNewProject);

module.exports = router;