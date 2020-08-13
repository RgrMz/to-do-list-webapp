import React from 'react';

class Navbar extends  React.Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div class="navbar">
                <button className="nav-button" id="b1" type="button" onClick="">Add new task</button>
                <button className="nav-button" id="b2" type="button">Delete task</button>
                <button className="nav-button" id="b3" type="button">Dark/Light mode</button>
            </div>
        )
    }
}

export default Navbar;