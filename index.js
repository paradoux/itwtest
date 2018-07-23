const express = require('express')
const db = require('./db').db


var app = express()

app.get('/', function (req, res) {
    res.send('Launch success !')
})

app.listen(3000)