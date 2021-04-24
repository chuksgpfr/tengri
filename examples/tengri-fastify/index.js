const fastify = require('fastify')();
var home = require('./routes/home');

fastify.register(home, { prefix: '/users' });

//fastify.get('/users', home)
// Run the server!
fastify.listen(2410, (err, address) => {
        if (err) throw err
        console.log('server listening on 2410')
})
