import React from 'react';
import TaskItem from './TaskItem';
import Navbar from './Navbar';

class Task extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        return(
            <div className="task-container">
                {this.props.taskItems}
            </div>
        );
    }
}

export default Task;