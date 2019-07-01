import React from 'react'; 
import './Header.css'; 
import Form from "../Form/Form"; 

export default function Header(props) {
    console.log('hey', props)
    return (
        
        <div className="header">
            <div className="tasks">
                <button className="tasksButton" 
                onClick={() => props.handleChangeView('tasks')}>Tasks</button>
            </div>
             <div className="finished">
                <button className="finishedButton"
                onClick={() => props.handleChangeView('finished')}>Finished</button>
            </div> 
            <div className="add">
                <button className="addButton"
                onClick={props.toggleModal}>Add</button>
            </div>
            {props.toggleModalValue ? (
                <Form toggleModalBack={props.toggleModalBack}
                createTask={props.createTask}
                currentTask={props.currentTask}
                editing={props.editing}
                updateTask={props.updateTask} />
            ) : null}
        
            

        </div>
    ); 
}