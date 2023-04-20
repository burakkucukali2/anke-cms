const express = require('express');
const { addCategory, getProjectsByCategory, getAllCategories } = require('../controllers/category');

const router = express.Router();

router.get('/', getAllCategories);
router.get('/add-category', addCategory);
router.get('/category/:categoryId', getProjectsByCategory);

module.exports = router;
