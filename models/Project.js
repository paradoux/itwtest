const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    phase: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})

const Project = mongoose.model('Project', projectSchema);

module.exports.project = Project;