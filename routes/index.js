const express = require('express')
const router = express.Router()
const Project = require('../models/Project').project

router.get('/projects', (req, res) => {
    Project.find({}, (err, projects) => {
        if (err) { console.error('Error in restoring projects') } else {
            res.json(projects)
        }
    })
})

router.post('/new', (req, res) => {
    let { task } = req.body
    var newProject = new Project(task)
    newProject.save((err) => {
        if (err) { console.error('Error when saving the project') } else { console.log('Saved !') }
    })
})

router.delete('/delete', (req, res) => {
    var { _id } = req.body
    return (_id) ? Project.deleteOne({ _id }, (err) => {
        if (err) { console.error('Error when deleting the project') } else { console.log('Success in deleting project !') }
    }) : console.error('Error: Request parameter not available')
})

router.put('/update', (req, res) => {
    let { _id, phase } = req.body
    Project.findById({ _id }, (err, project) => {
        if (err) { console.error('Error when finding the project to update') }
        project.set({ phase: phase });
        project.save((err) => {
            if (err) { console.error('Error when saving the project') } else { console.log('Project updated !') }
        })
    })
})

module.exports.router = router
