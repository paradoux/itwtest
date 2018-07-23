const mongoose = require(mongoose)
const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    description: String,
    phase: String,
    created_at: Date.now
})

