import React from "react"; 
import "./Task.css"; 

export default function Task(props) {
    const{ title, comments, id, completed } = props.task; 

    console.log("my props", props)
    return (
        <div className="task">
             <input type="checkbox" name="checkbox" value="checked" onClick={() => props.updateTask(id, props.task, !completed)}></input>
            <div className="task-details">
                <p>{title}</p>
                <p>Comments: {comments}</p>
            </div>

            <div className="task-btns">
                <button
                onClick={() => props.setEditing(id)}
                > Edit
                </button>

                <button 
                onClick={() => props.deleteTask(id)}
                > Delete
                </button>
            </div>
        </div>
    ); 
}