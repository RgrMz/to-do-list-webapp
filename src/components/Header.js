import React from 'react';
import Navbar from './Navbar';


class Header extends React.Component {
    
    constructor(){
        super();
    }

    render() {    
        return(
            <div className = "header" style={{
               
            }}> 
                <header id="header">
                    <h1>To do list web application! - Have a control of your routine tasks</h1>
                </header>
                <Navbar addTask={this.props.addTask} deleteTask={this.props.deleteTask}/>
                <br/>
            </div>
        );
    }
}

export default Header;