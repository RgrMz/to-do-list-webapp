import React from 'react'
import Task from './Task'

class Maincontent extends React.Component {

    constructor() {

        super();

    }

    render() {
        return (
            <div id="main-container">
                <Task/>
            </div>
        );
    }

}

export default Maincontent;