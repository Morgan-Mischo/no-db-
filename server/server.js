require('dotenv').config({path: __dirname + '/../.env'}); 
const express = require('express'); 
const fc = require('./controllers/formController.js'); 
const {SERVER_PORT} = process.env; 

const app = express(); 

app.use(express.json()); 

app.get('/api/tasks', fc.getTasks);

app.post('/api/task/:id', fc.addTask); 

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})