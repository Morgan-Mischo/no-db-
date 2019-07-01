import React from "react"; 
import Header from "../Header/Header"; 
import Form from "../Form/Form"; 
import List from "../List/List"; 
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
            view: ''
        }; 
        this.toggleModal = this.toggleModal.bind(this); 
        this.toggleModalBack = this.toggleModalBack.bind(this); 
    }

    toggleModal = () => this.setState({ toggleModal : true }); 

    toggleModalBack = () => this.setState({ toggleModal : false }); 

    handleChangeView(view){
        this.setState({
            view: view
        })
    }

    componentDidMount() {
        axios
        .get("/api/tasks")
        .then(res => {
            console.log(res.data); 
            this.setState({
                tasks: res.data
            }); 
        }); 
    }

    createTask = task => {
        axios.post("/api/task", task)
        .then(res => {
            console.log(res.data); 
            this.setState({
                tasks: res.data
            }); 
        }); 
    }; 

    deleteTask= id => {
        axios.delete(`/api/task/${id}`)
        .then(res => {
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

    updateTask = (id, task) => {
        axios
        .put(`/api/task/${id}`, task)
        .then(res=> {
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

        return(
            <div className="dash">
                <Header />
                <div className="container">
                    <div className="main-form">
                        <Form
                        createTask={this.createTask}
                        currentTask={currentTask}
                        editing={editing}
                        updateTask={this.updateTask}
                        toggleModal={this.toggleModal}
                        toggleModalBack={this.toggleModalBack}
                        toggleModalValue={this.state.toggleModal}
                        />
                    </div>
                    <div className="main-list">
                        <List
                        tasks={tasks}
                        deleteTask={this.deleteTask}
                        setEditing={this.setEditing}
                        />
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Dash; 