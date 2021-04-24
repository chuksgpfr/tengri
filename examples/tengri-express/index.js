
    const express = require('express');
    const homeRoute = require('./routes/home');


    var app = express();

    const PORT = 3221;

    app.use('/api', homeRoute);

    app.listen(PORT, () => {
        console.log('Server is running on PORT 3990')
    })