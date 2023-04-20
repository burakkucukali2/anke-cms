const express = require('express');
const { addCategory, getProjectsByCategoryId, getAllCategories } = require('../controllers/category');

const router = express.Router();

router.get('/', getAllCategories);
router.post('/add-category', addCategory);
router.get('/:categoryId', getProjectsByCategoryId);

module.exports = router;
