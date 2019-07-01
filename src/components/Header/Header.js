import React from 'react'; 
import './Header.css'; 
import Form from "../Form/Form"; 

export default function Header(props) {
    return (
        <div className="header">
            <div className="tasks">
                <button className="tasksButton" 
                onClick={() => this.props.handleChangeView('tasks')}>Tasks</button>
            </div>
            <div className="finished">
                <button className="finishedButton"
                onClick={() => this.props.handleChangeView('finished')}>Finished</button>
            </div>
            <div className="add">
                <button className="addButton"
                onClick={this.props.toggleModal}>Add</button>
            </div>
            {this.props.toggleModalValue ? (
                <Form toggleModalBack={this.props.toggleModalBack} />
            ) : null}
            )}
        </div>
    ); 
}