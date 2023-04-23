const express = require('express');
const categories = require('./category');
const projects = require('./project');
const auth = require('./auth');
const services = require('./service');

const router = express.Router();

router.use('/projects', projects);
router.use('/auth', auth);
router.use('/categories', categories);
router.use('/services', services);

module.exports = router;