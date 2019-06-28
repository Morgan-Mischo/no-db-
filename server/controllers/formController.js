let tasks = [
    {id: 1, 
    title: 'hello', 
comments: 'hello there', 
time: 'morning', 
completed: false},
{
    id: 2, 
    title: 'hi', 
    comments: 'hi there', 
    time: 'evening', 
    completed: true
}
]; 

let id = 3;


module.exports = {
    getTasks(req, res) {
        console.log('hit get tasks')
        res.status(200).send(tasks); 
    }, 

    // updateTasks(req, res) {
    //     let { id, title,  comments, recurrence, time} = req.params; 
    //     res.status(200).send(tasks); 
    // },

    addTask(req, res){
        console.log('hit the addTask')
        let { id } = req.params; 
        let { title, comments, time, completed } = req.body; 
        let newTask = {
            id, 
            title, 
            comments, 
            // recurrence, 
            time, 
            completed 
        }; 
        id++; 
        tasks.push(newTask); 
        res.status(200).send(tasks); 
    }

}

