import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      // comments: "",
      // time: ""
    };
    this.handleTitle = this.handleTitle.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 

  }

  handleTitle(e){
    this.setState({
      title : e.target.value
    }); 
  }

  handleSubmit(e) {
    alert('A title was submitted: ' + this.state.title); 
    e.preventDefault(); 
  }

  render() {
    return (
      <div className="modal">
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleTitle}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

export default Form;
