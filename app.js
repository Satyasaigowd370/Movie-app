const express = require("express")
const app = express()
const sanitizeHTML = require("sanitize-html")
const jwt = require("jsonwebtoken")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", require("./router"))


module.exports = app
