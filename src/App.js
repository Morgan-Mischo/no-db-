import React, {Component} from 'react';
import axios from 'axios'; 

import './App.css';
import Form from './components/Form'; 
import Afternoon from './components/Afternoon';
import Evening from './components/Evening'; 
import Morning from './components/Morning';


class App extends Component {
  constructor() {
    super(); 
    this.state ={
      newDay: '', 
      tasks: [],
      toggleModal: false
    };
  }

  componentDidMount() {
    axios
    .get('/api/tasks')
    .then(res => {
      this.setState({ tasks: res.data }); 
    })
    .catch(err => {
      console.log('err from server', err); 
    }); 
  }; 

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


  addTask = (newTask) => {
    axios
    .post('/api/task', newTask)
    .then(res => {
      this.setState({ tasks: res.data }); 
    })
    .then(res => {
      this.setState({ toggleModal: true}); 
    })
    .catch(err => {
      console.log('err from server', err)
    }); 
  }; 

 


  render() {

    // .filter on tasks array

    return(
      <div className="App">
      <div className="header">
        <div className="tasks">Tasks</div>
        <div className="finished">
        </div>
        <div className="add">
          <button onClick={this.addTask}>Add</button>
        </div>
        {
          this.state.toggleModal ? (
          <Form />
          ) : null

        }
        <div className="new-day">New Day</div>
      </div>
      <div className="morning">Morning</div>
      <div className="afternoon">Afternoon</div>
      <div className="evening">Evening</div>
      </div>
      
      
    )
  }
}

export default App;
