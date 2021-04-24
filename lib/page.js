var express = require("express");
var moment = require("moment");

var TengriWatch = require("./models/TengriWatch");

var router  = express.Router();


router.get("/",async(req,res)=>{
    const tengri = await TengriWatch.query().orderBy('id',"DESC");

    res.render('pages/index',{tengri, moment, select:"select(id);"})
})

module.exports = router;