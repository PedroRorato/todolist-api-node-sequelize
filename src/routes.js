const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');

//User
routes.get('/users', UserController.index );
routes.post('/users', UserController.store );
routes.get('/users/:user_id', UserController.show );
routes.put('/users/:user_id', UserController.update );
routes.delete('/users/:user_id', UserController.destroy );

//Tasks
routes.get('/users/:user_id/tasks', TaskController.index );
routes.post('/users/:user_id/tasks', TaskController.store );
routes.get('/users/:user_id/tasks/:task_id', TaskController.show );
routes.put('/users/:user_id/tasks/:task_id', TaskController.update );
routes.delete('/users/:user_id/tasks/:task_id', TaskController.destroy );

module.exports = routes;