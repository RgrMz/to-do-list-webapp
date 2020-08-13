import React from 'react';
import './styles/App.css';
import './styles/header.css';
import './styles/Navbar.css';
import './styles/Task.css';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
import TaskItem from './components/TaskItem';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      taskItems: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask() {
    const taskItems = this.state.taskItems;
    this.setState({
        taskItems: taskItems.concat(<TaskItem key={taskItems.length} />)
    })
  }

  deleteTask() {
    let taskToDelete = -1; //Hay que terminar esta function 
    do{
      taskToDelete = prompt('Please, introduce the task\'s number');
      console.log(taskToDelete);
      console.log(this.state.taskItems.length)
    }while(taskToDelete < this.state.taskItems.length || taskToDelete > this.state.taskItems.length);
    this.setState(prevState => {
        delete prevState[taskToDelete];
        return {
          taskItems: prevState
        }
      })
    }

  render() {
    return (
      <div className="App">
        <Header addTask={this.addTask} deleteTask={this.deleteTask}/>
        <Maincontent taskItems={this.state.taskItems}/>
      </div>
    );
  }
}

export default App;