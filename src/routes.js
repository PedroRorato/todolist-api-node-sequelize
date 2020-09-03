const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

//User
routes.get('/users', UserController.index );
routes.post('/users', UserController.store );
routes.get('/users/:user_id', UserController.show );
routes.put('/users/:user_id', UserController.update );
routes.delete('/users/:user_id', UserController.destroy );

module.exports = routes;