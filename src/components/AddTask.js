import React, { useState } from "react";

const AddTask = props => {
    const [newTask, setNewTask] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        // console.log(newTask);
        const newId = Math.random().toString();
        
        props.onAddTask({ task: newTask, id: newId, editFlag: false });
        setNewTask('');
    }

    const inputChangeHandler = event => {
        // console.log(event.target.value);
        setNewTask(event.target.value);
    }
    return (
        <form onSubmit={submitHandler}>
            <input className="addtask-input" type="text" name="task" id="task" placeholder="new task" onChange={inputChangeHandler} value={newTask} />
            <button className="add-btn" type="submit">Add Task</button>
        </form>
    )
}

export default AddTask;