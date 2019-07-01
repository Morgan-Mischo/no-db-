import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      comments: "",
      time: "",
      completed: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentTask !== this.props.currentTask) {
      this.setState({
        title: this.props.currentTask.title,
        comments: this.props.currentTask.comments,
        time: this.props.currentTask.time,
        completed: this.props.currentTask.completed
      });
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  createTask = event => {
    event.preventDefault();

    const { title, comments, time, completed } = this.state;

    let newTask = {
      title,
      comments,
      time,
      completed
    };

    this.props.createTask(newTask);

    this.setState({
      title: "",
      comments: "",
      time: "",
      completed: ""
    });
  };

  updateTask = event => {
    event.preventDefault();

    const { id } = this.props.currentTask;
    const { title, comments, time, completed } = this.state;
    let updatedTask = {
      title,
      comments,
      time,
      completed
    };

    this.props.updateTask(id, updatedTask);

    this.setState({
      title: "",
      comments: "",
      time: "",
      completed: ""
    });
  };

  render() {
    const { title, comments, time, completed  } = this.state;
    const { editing } = this.props;

    return (
      <div className="modal">
        <form
          className="form"
          onSubmit={editing ? this.updateTask : this.createTask}
        >
          <input
            name="title"
            type="text"
            placeholder="Task"
            onChange={this.handleChange}
            value={title}
          />
          <input
            name="comments"
            type="text"
            placeholder="Comments"
            onChange={this.handleChange}
            value={comments}
          />
          <input
          className="radio"
            name="time"
            type="radio"
            placeholder="Time"
            onChange={this.handleChange}
            value="morning"
          />
          Morning
          <input
          className="radio"
            name="time"
            type="radio"
            placeholder="Time"
            onChange={this.handleChange}
            value="afternoon"
          />
          Afternoon
          <input
          className="radio"
            name="time"
            type="radio"
            placeholder="Time"
            onChange={this.handleChange}
            value="evening"
          />
          Evening
          {editing ? (
            <button>Update Task</button>
          ) : (
            <button>Create Task</button>
          )}
          {/* <div className="xButton">
            <button onClick={this.props.toggleModalBack}>X</button>
          </div> */}
        </form>
      </div>
    );
  }
}
