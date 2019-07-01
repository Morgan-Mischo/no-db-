import React, { Component } from "react";
import App from "../../App"; 
import Task from "../Task/Task"; 

class DisplayFinished extends Component {

  render() {
  let filteredMorning = this.props.tasks.filter(task => task.time === 'morning'); 
  let filteredAfternoon = this.props.tasks.filter(task => task.time === 'afternoon'); 
  let filteredEvening = this.props.tasks.filter(task => task.time === 'evening');

  let morningTasks=filteredMorning.map(task => {
    return (
      <Task
      key={task.id}
      task={task}
      deleteTask={this.props.deleteTask}
      setEditing={this.props.setEditing}
      id={task.id}
      updateTask={this.props.updateTask}
      createTask={this.props.createTask}
      />
    )})

  let afternoonTasks=filteredAfternoon.map(task => {
    return (
      <Task
      key={task.id}
      task={task}
      deleteTask={this.props.deleteTask}
      setEditing={this.props.setEditing}
      id={task.id}
      updateTask={this.props.updateTask}
      createTask={this.props.createTask}
      />
    )})

    let eveningTasks=filteredEvening.map(task => {
      return (
        <Task
        key={task.id}
        task={task}
        deleteTask={this.props.deleteTask}
        setEditing={this.props.setEditing}
        id={task.id}
        updateTask={this.props.updateTask}
        createTask={this.props.createTask}
        />
      )})
    
  return(
    <div>
    <header className='morning'>Morning</header>
    <div className="morning-tasks">{morningTasks}</div>

    <header className='afternoon'>Afternoon</header>
    <div className="afternoon-tasks">{afternoonTasks}</div>
    
    <header className='evening'>Evening</header>
    <div className="evening-tasks">{eveningTasks}</div>
    </div>
  )
}
}



export default DisplayFinished;