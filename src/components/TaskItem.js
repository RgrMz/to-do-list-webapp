import React from 'react';

class TaskItem extends React.Component{

    constructor() {
        super();
        this.state= {
            completed: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => {
            return{
                completed: !prevState.completed
            };
        });
    }

    render() {
        /* To pass a handling event function we can use arrow function, or not 
           bind it so we can pass the function's reference */
        return (
            <div>
                <div class="double">
                    <input type="checkbox" class="task"
                    checked={this.state.completed}
                    onChange={() => this.handleChange()}
                    />
                </div>
                <input className="task-text" type="text"
                placeholder="Waiting for task..."
                style={{
                    textDecoration: this.state.completed? 'line-through' : 'none',
                    color: this.state.completed? 'red' : 'black'
                }}
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