var express = require("express");
var app = express();
var Tengri = require("./tengri");
var {tengri} = require("./tengri");
var home = require("./route");
// var page = require("./page");
var server = require("./server");

Tengri.init('knexfile.js')

app.use(express.json({ limit: '1mb' }));

// app.set('views','./lib/views')
// app.set('view engine', 'ejs');

// app.use('/',page)

app.use(server);

app.use(tengri)
app.use('/d',home)


app.listen(8080,()=>{
    console.log("server is on")
})