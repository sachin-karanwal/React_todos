import React from "react";
import { useState } from "react/cjs/react.development";

const EditTaskItem = props => {
    const [editedTask, setEditedTask] = useState(props.task.task);
    const [flag, setFlag] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        if(flag===true)
        props.onUpdateTask(props.task.id, editedTask, flag);
        else
        props.onUpdateTask(props.task.id, '', flag);
    }

    const inputChangeHandler = event => {
        setEditedTask(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input className="edit-input" type="text" onChange={inputChangeHandler} value={editedTask} />
            <button type="submit" className="cancel-btn" onClick={() => {
                setFlag(false);
            }}>Cancel</button>
            <button type="submit" className="save-btn">Save</button>
        </form>
    )
}

export default EditTaskItem;