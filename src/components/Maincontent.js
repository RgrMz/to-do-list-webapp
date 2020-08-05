import React from 'react'
import Task from './Task'

function Maincontent() {
    return (
        <div id="main-container">
            <ul id="list-container">
                <li class="list-task"><Task/></li>
                <li class="list-task"><Task/></li>
                <li class="list-task"><Task/></li>
                <li class="list-task"><Task/></li>

            </ul>
        </div>
    )
}

export default Maincontent;