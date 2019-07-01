let tasks = [
    {
        id: 1, 
        title: "monday", 
        comments: "sucks", 
        time: "morning", 
        completed: false
    }, 
    {
        id: 2, 
        title: "tuesday", 
        comments: "also sucks", 
        time: "evening", 
        completed: true
    }
]; 

module.exports = {
    getTasks: (req, res) => {
        console.log(tasks); 
        res.status(200).send(tasks); 
    }, 

    createTask: (req, res) => {
        console.log("hit addTask"); 
        let { id } = req.params; 
        let { title, comments, time, completed } = req.body; 

        let newTask = {
            id, 
            title, 
            comments, 
            time, 
            completed
        }; 

        tasks.push(newTask); 
        id++; 
        res.status(200).send(tasks); 
    }, 

    deleteTask: (req, res) => {
        console.log("hit deleteTask", req.params); 
        const { id } = req.params; 

        let index = tasks.findIndex(task => task.id === +id); 

        tasks.splice(index, 1); 

        res.status(200).send(tasks); 
    }, 

    updateTask: (req, res) => {
        console.log("hit update", req.body); 
        const { id } = req.params; 
        let { completedStatus } = req.body; 
        let { title, comments, time, completed} = req.body.task

        let updatedTask = {}
        if(completed !== completedStatus) {
            console.log('hit if')
            updatedTask = {
                id, 
                title, 
                comments, 
                time, 
                completed: completedStatus
            };  
        } else {
            console.log('hit else')
            updatedTask = {
                id, 
                title, 
                comments, 
                time, 
                completed
            };  
        }

        console.log(completedStatus ,updatedTask)

        let index = tasks.findIndex(task => task.id === +id); 

  

        tasks[index] = { ...tasks[index], ...updatedTask }; 
        res.status(200).send(tasks); 
    }
}; 