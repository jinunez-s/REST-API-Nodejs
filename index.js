import express from 'express';
//const express = require('express'); old import
import bodyParser from 'body-parser'; //take in incoming request bodys

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);  

const appss = [];

app.get('/', (req, res) =>{
    res.send("Hello World from HOMEPAGE");
} );

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

