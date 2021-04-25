var express = require("express");
var app = express();
var page = require("./page");


app.set('views','./lib/views')
app.set('view engine', 'ejs');

app.use('/tengri/tengriserver',page)


module.exports = app;