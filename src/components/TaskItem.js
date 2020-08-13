import React from 'react';

class TaskItem extends React.Component{

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class="double">
                    <input type="checkbox" class="task"/>
                </div>
                <input className="task-text" type="text"
                placeholder="Waiting for task..."
                />
                
                <hr style={{margin: "20px 10px 20px 10px",
                            height: "12px",
                            border: "0",
                            "box-shadow": "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)"}}
                />
            </div>
        );
    }
}

export default TaskItem;