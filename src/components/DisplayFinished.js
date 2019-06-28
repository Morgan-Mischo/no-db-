import React, { Component } from "react";
import Form from "./Form";

class DisplayFinished extends Component {

  

  render() {
    let filteredFinished = this.props.tasks.filter(task => task.completed); 
      console.log(filteredFinished);
    return (
      <div className="DisplayFinished">
          <header className="tasksHeader">Finished</header>
        <div className="morning">Morning</div>
        <div className="afternoon">Afternoon</div>
        <div className="evening">Evening</div>
      </div>
    );
  }
}

export default DisplayFinished;