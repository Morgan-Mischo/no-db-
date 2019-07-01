import React, { Component } from 'react'; 
import Task from "../Task/Task"; 
import "./List.css"; 

export default class List extends Component {
    render() {
        const mappedTasks = this.props.tasks.map(task => {
            return (
                <Task
                key={task.id}
                task={task}
                deleteTask={this.props.deleteTask}
                setEditing={this.props.setEditing}
                id={task.id}
                />
            ); 
        }); 
        return <div className="list-container">{mappedTasks}</div>
    }
}