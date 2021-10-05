import React from "react";
import ShowTaskItem from "./ShowTaskItem";
import EditTaskItem from "./EditTaskItem";

const ShowTasksList = props =>{
    // const [editFlag, setEditFlag] = useState(true);

    return(
        <ul>
            {props.taskList.map(task=>{
               return <li className="task-item" key={task.id} > 
                         <input type="checkbox" name="taskcheck" id="taskcheck" />
                       <span className="task-text">{task.task}  </span>
                     
                      <button className="edit-btn" >edit</button> 
                      <button className="delete-btn" onClick={()=>{
                                  props.onDeleteTask(task.id)
                               }}>
                        delete</button>
                      </li>
            })}
        </ul>
    )
}

export default ShowTasksList;