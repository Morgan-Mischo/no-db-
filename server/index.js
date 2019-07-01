require('dotenv').config({path: __dirname + '/../.env'}); 
const express = require('express'); 
const ctrl = require("./controllers/task_contoller"); 
const {SERVER_PORT} = process.env; 

const app = express(); 

app.use(express.json()); 

app.get("/api/tasks", ctrl.getTasks); 

app.post("/api/tasks", ctrl.createTask); 

app.delete("/api/task/:id", ctrl.deleteTask); 

app.put("/api/task/:id", ctrl.updateTask); 

app.listen(SERVER_PORT, () => {
    console.log("Listening on port: ", SERVER_PORT); 
}); 