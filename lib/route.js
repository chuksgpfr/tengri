var express = require("express");
var crypto = require("crypto")

var route = express.Router();

route.get('/ss',async(req,res)=>{
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex');
    console.log(hash);

    res.send({success:true,message:"Hey"})
})

route.get('/vv',async(req,res)=>{
    res.status(401).send({success:false,message:"Error"})
})

module.exports = route;