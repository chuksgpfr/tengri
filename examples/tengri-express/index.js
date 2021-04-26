const express = require('express');
var Tengri = require("tengriwatch");
var {tengri, tengriServer} = require("tengriwatch")
const homeRoute = require('./routes/home');

Tengri.init('connect.js')


var app = express();

app.use('/tengriservice',tengriServer);

const PORT = 3221;

app.use(tengri)
app.use('/api', homeRoute);

app.listen(PORT, () => {
    console.log('Server is running on PORT 3221')
})