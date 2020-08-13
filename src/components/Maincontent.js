import React from 'react'
import Task from './Task'

function Maincontent (props) {
        return (
            <div id="main-container">
                <Task taskItems={props.taskItems} />
            </div>
        );
    }

export default Maincontent;