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
        console.log("hit getTask"); 
        res.status(200).send(tasks); 
    }, 

    addTask: (req, res) => {
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

        id++; 
        tasks.push(newTask); 
        res.status(200).send(tasks); 
    }, 

    deleteTask: (req, res) => {
        console.log("hit deleteTask"); 
        const { id } = req.params; 

        let index = tasks.findIndex(task => task.id === +id); 

        tasks.splice(index, 1); 

        res.status(200).send(tasks); 
    }, 

    updateTask: (req, res) => {
        console.log("hit updateTask"); 
        const { id } = req.params; 
        let { title, comments, time, completed } = req.body; 

        let index = tasks.findIndex(task => task.id === +id); 

        let updatedTask = {
            id, 
            title, 
            comments, 
            time, 
            completed
        };  

        tasks[index] = { ...tasks[index], ...updatedTask }; 
        res.status(200).send(tasks); 
    }
}; 