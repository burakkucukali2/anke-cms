const express = require('express');
const router = express.Router();

const categories = require('./category');
const projects = require('./project');
const auth = require('./auth');

router.use('/projects', projects);
router.use('/auth', auth);
router.use('/categories', categories);

module.exports = router;