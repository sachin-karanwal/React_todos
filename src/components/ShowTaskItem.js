import React from "react";

const ShowTaskItem = props => {
    return (
        <li className="task-item"  >
            <input type="checkbox" name="taskCheck" id="taskCheck" />
            <span className="task-text">{props.task.task}  </span>

            <button className="edit-btn" onClick={() => {
                props.onUpdateTask(props.task.id, '', true)
            }} >edit</button>
            <button className="delete-btn" onClick={() => {
                props.onDeleteTask(props.task.id)
            }}>
                delete</button>
        </li>
    )
}

export default ShowTaskItem;