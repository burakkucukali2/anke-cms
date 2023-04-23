const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    suffix: { type: String, required: true },
    imgSrc: { type: String, required: true },
});

module.exports = mongoose.model('Service', serviceSchema);