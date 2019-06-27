const tasks = []; 

let id = 1; 

module.exports = {
    tasks(req, res) {
        res.status(200).send(tasks); 
    }, 
    updateTasks(req, res) {
        let { id } = req.params; 
    }
}

