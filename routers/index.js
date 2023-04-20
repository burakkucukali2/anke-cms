const express = require('express');
const categories = require('./category');
const projects = require('./project');
const auth = require('./auth');

const router = express.Router();

router.use('/projects', projects);
router.use('/auth', auth);
router.use('/categories', categories);

module.exports = router;