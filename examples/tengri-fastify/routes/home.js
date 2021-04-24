async function routes(fastify, options) {

    fastify.get('/:id', async (req, res) => {
        res.send({
            id: req.params.id
        })
    })

}

module.exports = routes;
