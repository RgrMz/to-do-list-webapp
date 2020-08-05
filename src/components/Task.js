import React from 'react';

function Task() {
    return(
        <div className="task-container">
            <div class="double">
                <input type="checkbox" class="task"/>
            </div>
            <p className="task-text">Waiting for task description...</p><br></br>
        </div>
    );
}

export default Task;