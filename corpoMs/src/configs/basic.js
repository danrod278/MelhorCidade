const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors")


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}));

module.exports = app
