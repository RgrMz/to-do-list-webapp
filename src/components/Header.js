import React from 'react';
import Navbar from './Navbar';

function Header() {
    return(
        <div class = "header"> 
            <header id="header">
                <h1>To do list web application! - Have a control of your routine tasks</h1>
            </header>
            <Navbar/>
        </div>
    );
}

export default Header;