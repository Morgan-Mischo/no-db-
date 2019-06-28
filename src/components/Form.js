import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      comments: "", 
      recur: []
    };
  }

  handleSubmit() {
    this.props.addTask(this.state);
    this.setState({
      title: "",
      comments: ""
    });
  }

  

  render() {
      console.log(this.props)
    return (
      <div className="modal" >
        <div className="task">
          Task: <input type="text" value={this.title} onChange={this.props.updateTask} />
        </div>
        <div className="comments">
          Comments: <input type="text" />
        </div>
        {/* <div className="recurrence"> Recurrence:  */}
        {/* <form> */}
        {/* <input type="radio" name="recur" value="yes"/> Recurring
            <input type="radio" name="recur" value="no"/> Non-Recurring
            </form>
        </div> */}
        <div className="time"> Time: 
        <form>
            <input type="radio" name="time" value="morning"/> Morning
            <input type="radio" name="time" value="afternoon"/> Afternoon
            <input type="radio" name="time" value="evening"/> Evening
        </form>
        </div>
        <button className="submitButton" onClick={this.handleSubmit}>Submit</button>
        <button className="xButton" onClick={this.props.toggleModalBack}>X</button>
      </div>
    );
  }
}
//pass down as a prop

export default Form;
