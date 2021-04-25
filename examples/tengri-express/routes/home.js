const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("OK")
});

router.get('/ss', async (req, res) => {
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
        .update('I love cupcakes')
        .digest('hex');
    console.log(hash);

    res.send({ success: true, message: "Hey" })
})

router.get('/vv', async (req, res) => {
    res.status(401).send({ success: false, message: "Error" })
})

router.get('/yy', async (req, res) => {
    res.status(301).send({ success: false, message: "Error" })
})

module.exports = router;
