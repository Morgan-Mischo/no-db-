import React, {Component} from 'react'; 

class Form extends Component{
constructor () {
    super(); 
    this.state = {
        title: '', 
        comments: '', 
    }
}

handleSubmit () {
    this.props.addTask(this.state)
    this.setState({ 
        title : '', 
        comments: ''
    })

}

render() {
    return (
        <div onClick={this.handleSubmit}>
            <h1>hey there</h1>
        </div>
    )
}
}
//pass down as a prop

export default Form; 