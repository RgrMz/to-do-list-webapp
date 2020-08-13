import React from 'react';
import TaskItem from './TaskItem';

class Task extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        return(
            <div className="task-container">
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </div>
        );
    }
}

export default Task;