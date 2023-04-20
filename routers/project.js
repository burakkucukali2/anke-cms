const express = require('express');
const { getAllProjects, addNewProject } = require('../controllers/project');

const router = express.Router();

router.get('/', getAllProjects);
router.post('/add-new-project', addNewProject);

module.exports = router;