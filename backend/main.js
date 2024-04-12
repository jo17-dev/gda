// const env = require('dotenv').config().parsed;
const express = require('express');
const bodyParser = require('body-parser');
const app =  express();
const port = 500;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // à modifier par un truc
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/', require('./routes/operation.route'));

app.listen(port, ()=>console.log("server statred on port "+port));