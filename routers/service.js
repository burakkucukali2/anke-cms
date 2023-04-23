const express = require('express');
const { addService, getAllServices } = require('../controllers/service');

const router = express.Router();

router.get('/', getAllServices);
router.post('/add-service', addService);

module.exports = router;