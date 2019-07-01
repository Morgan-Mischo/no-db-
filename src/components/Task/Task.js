import React from "react"; 
import "./Task.css"; 

export default function Task(props) {
    const{ title, comments, id } = props.task; 
    return (
        <div className="task">
            <div className="task-details">
                <p>{title}</p>
                <p>Comments: ${comments}</p>
            </div>

            <div className="task-btns">
                <button
                style={{ background: "orange" }}
                onClick={() => props.setEditing(id)}
                >
                    <i className="far fa-edit"/>
                </button>

                <button 
                style={{ background: "red" }}
                onClick={() => props.deleteTask(id)}
                >
                    <i className="fas fa-times"/>>
                </button>
            </div>
        </div>
    ); 
}