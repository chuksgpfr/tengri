var express = require("express");
var app = express();
var page = require("./page");


app.set('views',__dirname+'/views')
app.set('view engine', 'ejs');

app.use('/',page)


module.exports = app;