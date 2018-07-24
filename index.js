const express = require('express')
const db = require('./db').db
const Project = require('./models/Project').project
const router = require('./routes/index').router
const bodyParser = require('body-parser')


var app = express()

app.get('/', function (req, res) {
    res.send('Launch success !')
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router)

app.listen(5000)