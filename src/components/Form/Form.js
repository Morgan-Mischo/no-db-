import React, { Component } from 'react'; 
import "./Form.css"; 

export default class Form extends Component {
    constructor() {
        super(); 

        this.state={
            title: '', 
            comments: '', 
            time: '', 
            completed: ''
        }; 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentTask.name !== this.props.currentTask.name){
            this.setState({
                title: this.props.currentTask.title, 
                comments: this.props.currentTask.comments 
            }); 
        }
    }

    handleChange = event => {
        const { value, title } = event.target; 
        this.setState({
            [title]: value
        }); 
    }; 

    createTask = event => {
        event.preventDefault(); 

        const { title, comments } = this.state; 
        
        let newTask = {
            title, 
            comments
        }; 

        this.props.createTask(newTask); 

        this.setState({
            title: '', 
            comments: ''
        }); 
    }; 


    updateTask = event => {
        event.preventDefault(); 

        const { id } = this.props.currentTask; 
        const { title, comments } = this.state; 
        let updatedTask = {
            title, 
            comments
        }; 

        this.props.updateTask(id, updatedTask); 

        this.setState({
            title: "", 
            comments: ""
        })
    }; 

    render() {
        console.log(this.props); 
        const { title, comments } = this.state; 

        return (
            <div className="modal">
                <form
                className="form"
                onSubmit={this.createTask} 
                >
                    <h1>Add Task</h1>
                    <input
                    title="title"
                    type="text"
                    placeholder="Task"
                    onChange={this.handleChange}
                    value={title}
                    />
                    <input
                    title="comments"
                    type="text"
                    placeholder="Comments"
                    onChange={this.handleChange}
                    value={comments}
                    />
                        <button>Create Task</button>
                </form>
                <div className="xButton">
                <button onClick={this.props.toggleModalBack}>X</button>
                </div>
            </div>
        ); 
    }
}