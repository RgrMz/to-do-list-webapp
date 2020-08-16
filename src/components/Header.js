import React from 'react';
import Navbar from './Navbar';


class Header extends React.Component {
    
    constructor(){
        super();
    }

    render() {    
        return(
            <div className = "header">
                <header id="header">
                    <h1>To do list web application! - Have a control of your routine tasks</h1>
                </header>
                <Navbar addTask={this.props.addTask} deleteTask={this.props.deleteTask} deleteAllTasks={this.props.deleteAllTasks} />
                <br/>
            </div>
        );
    }
}

export default Header;