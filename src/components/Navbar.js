import React from 'react';

function Navbar() {
    return (
        <div class="navbar">
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <button className="nav-button" type="button">Add new task</button>
            <button className="nav-button" type="button">Delete task</button>
            <button classNamea="nav-button" type="button">Dark/Light mode</button>
        </div>
    )
}

export default Navbar;