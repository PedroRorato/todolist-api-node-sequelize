const express = require('express');
const routes = require('./routes');


//Start App
const app = express();
//Enable JSON
app.use(express.json());
//Routes
app.use(routes);
//Listener
app.listen(3333);