import React,{useState} from "react";

const AddTasks = props =>{
    const [newTask, setNewTask] = useState('');

    const submitHandler = event =>{
        event.preventDefault();
        console.log(newTask);
        const newId = Math.random().toString();
        props.onAddTask({task:newTask,id:newId});
        setNewTask('');
    }

    const taskChangeHandler = event =>{
        // console.log(event.target.value);
        setNewTask(event.target.value);
    }
   return (
      <form onSubmit={submitHandler}>
          <input className="addtask-input" type="text" name="task" id="task" placeholder="new task" onChange={taskChangeHandler} value ={newTask}/>
          <button className="add-btn" type="submit">Add Task</button>
      </form>
   )
}

export default AddTasks;