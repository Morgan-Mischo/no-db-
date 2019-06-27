import React, {Component} from 'react';
import axios from 'axios'; 

import './App.css';
import Add from './components/Add'; 
import Afternoon from './components/Afternoon';
import Evening from './components/Evening'; 
import Morning from './components/Morning';

class App extends Component {
  constructor() {
    super(); 
    this.state ={
      newDay: '', 
      tasks: {}
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
  }

  editTask = (id) => {
    
  }

  render() {
    return(
      <div className="App">
      <div className="header">
        Header
        <div className="tasks">Tasks</div>
        <div className="finished">Finished</div>
        <div className="add">Add</div>
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
