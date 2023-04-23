const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    projectOwner: { type: String },
    structureFeature: { type: String},
    projectFeature: { type: String},
    totalArea: { type: Number },
    moldArea: { type: Number },
    ironAmount: { type: Number },
    concreteAmount: { type: Number },
    imgSrc: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

module.exports = mongoose.model('Project', projectSchema);