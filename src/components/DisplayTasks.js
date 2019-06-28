import React, { Component } from "react";
import Form from "./Form";
import App from "../App"; 

class DisplayTasks extends Component {

  render() {
  let filteredMorning = this.props.tasks.filter(task => task.time === 'morning'); 
  let filteredAfternoon = this.props.tasks.filter(task => task.time === 'afternoon'); 
  let filteredEvening = this.props.tasks.filter(task => task.time === 'evening');

  let morningTasks=filteredMorning.map(task => {
    return (
      <div className="morning-task"
              key={task.id} >
                <div>title: {task.title}  </div>
                <div>comments: {task.comments}  </div>  
              </div>  
    )})


    
  return(
    <div>
    <header className='morning'>Morning</header>
    <div className="morning-tasks">{morningTasks}</div>
    </div>
  )
}
}



export default DisplayTasks;
