// import dependency
const express = require('express');

//starting express
const server = express();

//create route
server.get('/', () => {
    console.log('oi');
});

//connect server
server.listen(5500);
