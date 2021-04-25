
    const express = require("express");

    const router = express.Router();

    router.get('/',(req,res)=>{
        res.status(200).send("OK")
    });

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
    
    route.get('/yy',async(req,res)=>{
        res.status(301).send({success:false,message:"Error"})
    })

    module.exports = router;
    