import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import DisplayTasks from "../Display/DisplayTasks";
import DisplayFinished from "../Display/DisplayFinished";
import axios from "axios";
import "./Dash.css";

class Dash extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      editing: false,
      currentTask: {},
      toggleModal: false,
      view: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalBack = this.toggleModalBack.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  toggleModal = () => this.setState({ toggleModal: true });

  toggleModalBack = () => this.setState({ toggleModal: false });

  handleChangeView(view) {
    this.setState({
      view: view
    });
  }

  componentDidMount() {
    axios.get("/api/tasks").then(res => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      });
    });
  }

  createTask = task => {
    axios.post("/api/tasks", task).then(res => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      });
    });
  };

  deleteTask = id => {
    console.log("hit delete task", id)
    axios.delete(`/api/task/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      });
    });
  };

  setEditing = id => {
    console.log("hit editing");
    let task = this.state.tasks.find(task => task.id === +id);

    this.setState({
      editing: true,
      currentTask: task
    });
  };

  updateTask = (id, task, completedStatus) => {
    axios.put(`/api/task/${id}`, {task, completedStatus}).then(res => {
      console.log(res.data);
      this.setState({
        tasks: res.data,
        currentTask: {},
        editing: false
      });
    });
  };


  render() {
    let { tasks, currentTask, editing } = this.state;
    return (
      <div className="dash">
        <div className="header">
          <Header
            toggleModal={this.toggleModal}
            toggleModalBack={this.toggleModalBack}
            toggleModalValue={this.state.toggleModal}
            handleChangeView={this.handleChangeView}
            createTask={this.createTask}
            currentTask={currentTask}
            editing={editing}
            updateTask={this.updateTask}
          />
        </div>

        {this.state.view === "finished" ? (
          <DisplayFinished 
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          setEditing={this.setEditing}
          createTask={this.createTask}
          tasks={this.state.tasks.filter(task => task.completed === true)} />
        ) : (
          <DisplayTasks 
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
          setEditing={this.setEditing}
          createTask={this.createTask}
          tasks={this.state.tasks.filter(task => task.completed == false)} />
        )}
      </div>
    );
  }
}

export default Dash;
