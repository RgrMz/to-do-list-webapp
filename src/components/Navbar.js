import React from 'react';

function Navbar() {
    return (
        <div class="navbar">
            <button className="nav-button" id="b1" type="button">Add new task</button>
            <button className="nav-button" id="b2" type="button">Delete task</button>
            <button className="nav-button" id="b3" type="button">Dark/Light mode</button>
        </div>
    )
}

export default Navbar;