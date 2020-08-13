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
                <Navbar/>
                <br/>
            </div>
        );
    }
}

export default Header;