const express = require('express');
var Tengri = require("../../lib/tengri");
var tengriServer = require("../../lib/tengriServer");
var {tengri} = require("../../lib/tengri")
const homeRoute = require('./routes/home');

Tengri.init('connect.js')


var app = express();

app.use('/tengriservice',tengriServer);

const PORT = 3221;

app.use(tengri)
app.use('/api', homeRoute);

app.listen(PORT, () => {
    console.log('Server is running on PORT 3990')
})