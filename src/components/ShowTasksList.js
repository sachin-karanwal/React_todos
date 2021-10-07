import React from "react";
import ShowTaskItem from "./ShowTaskItem";
import EditTaskItem from "./EditTaskItem";

const ShowTasksList = props => {
    return (
        <ul>
            {props.tasksList.map(task => {
                return task.editFlag ? <EditTaskItem key={task.id} task={task} onUpdateTask={props.onUpdateTask} /> : <ShowTaskItem key={task.id} task={task} onDeleteTask={props.onDeleteTask} onUpdateTask={props.onUpdateTask} />
            })}
        </ul>
    )
}

export default ShowTasksList;