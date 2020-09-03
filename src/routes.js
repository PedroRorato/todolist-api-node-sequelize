const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send("Hi")
});

// routes.get('/users', UserController.index );
// routes.post('/users', UserController.store );

module.exports = routes;