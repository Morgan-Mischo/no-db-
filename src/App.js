import React, {Component} from 'react';
import axios from 'axios'; 

import './App.css';
import Form from './components/Form'; 
import DisplayTasks from './components/DisplayTasks'; 
import DisplayFinished from './components/DisplayFinished'; 
import Header from './components/Header'; 


class App extends Component {
  constructor() {
    super(); 
    this.state ={
      newDay: '', 
      tasks: [],
      toggleModal: false,

      morning: [], 
      afternoon: [], 
      evening: [],

      view: '', 
    };
    this.toggleModal = this.toggleModal.bind(this); 
    this.toggleModalBack = this.toggleModalBack.bind(this); 
    this.handleChangeView = this.handleChangeView.bind(this); 
  }

  componentDidMount() {
   axios.get('/api/tasks').then(res => {

    console.log(res.data)
     this.setState({
       tasks: res.data
     })
   }) 
  }

  //Everything when you hit the add button 
  addTask = (newTask) => {
    axios
    .post('/api/task', newTask)
    .then(res => {
      this.setState({ tasks: res.data }); 
    })
    .catch(err => {
      console.log('err from server', err)
    }); 
  }; 

  //Hitting the add button
  toggleModal = () => this.setState({ toggleModal : true }); 
  //Hitting the x inside the add button 
  toggleModalBack = () => this.setState({ toggleModal : false }); 


  //Eventually edit and delete tasks 
  editTask = (id) => {
    axios
    .put(`/api/tasks/${id}`)
    .then(res => {
      this.setState({ tasks: res.data }); 
    })
    .catch(err => {
      console.log('err after update', err)
    }); 
  }; 


  handleChangeView(view){
      this.setState({ 
        view: view
      })
  }
  render() {

    // .filter on tasks array

    return(
      <div className="App">
        <Header
        toggleModal = {this.toggleModal}
        toggleModalBack = {this.toggleModalBack}
        toggleModalValue={this.state.toggleModal}
        newDay = {this.newDay}
        handleChangeView = {this.handleChangeView}/>
        {this.state.view === 'finished' ?
        <DisplayFinished tasks = {this.state.tasks} /> :
        <DisplayTasks tasks = {this.state.tasks}/>}
      </div>
    )
  }
}

export default App;
