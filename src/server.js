const express = require('express');

//Start App
const app = express();

app.get('/', (request, response) => {
    return response.send("Hello")
});

app.listen(3333);