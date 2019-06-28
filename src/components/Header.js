import React, { Component } from "react";
import Form from "./Form"; 

class Header extends Component {
  render() {
    return (
      <div className="Header">
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
            <button className="addButton" onClick={this.props.toggleModal}>
              Add
            </button>
          </div>
          {this.props.toggleModalValue ? (
            <Form toggleModalBack={this.props.toggleModalBack} />
          ) : null}
          <div className="newDay">
            <button className="newDayButton" onClick={this.props.newDay}>
              New Day
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header; 
