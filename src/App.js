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
    this.deleteAllTask = this.deleteAllTask.bind(this);
  }

  addTask() {
    const taskItems = this.state.taskItems;
    this.setState({
      taskItems: taskItems.concat(<TaskItem key={taskItems.length} />)
    })
  }

  deleteTask() {
    /* TODO */
  }

  deleteAllTasks() {
    /* TODO */
  }

  render() {
    return (
      <div className="App">
        <Header addTask={this.addTask} deleteTask={this.deleteTask} deleteAllTasks={this.deleteAllTask}/>
        <Maincontent taskItems={this.state.taskItems} />
      </div>
    );
  }
}

export default App;