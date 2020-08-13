import React from 'react';

class Navbar extends  React.Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <div class="navbar">
                    <button className="nav-button" id="b1" type="button" 
                    onClick={() => this.props.addTask()}>Add new task</button>
                    <button className="nav-button" id="b2" type="button"
                    onClick={() => this.props.deleteTask()}>Delete task</button>
                    <button className="nav-button" id="b3" type="button">Delete all tasks</button>
                </div>
            </div>
        );
    }
}

export default Navbar;