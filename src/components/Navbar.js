import React from 'react';

function Navbar() {
    return (
        <div class="navbar">
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
            <button class="nav-button" type="button">Add new task</button>
            <button class="nav-button" type="button">Delete task</button>
            <button class="nav-button" type="button">Dark/Light mode</button>
        </div>
    )
}

export default Navbar;