import React,{useState} from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import ShowTasksList from './components/ShowTasksList';

function App() {
  const [taskList,setTaskList]  = useState([{task:"cook food",id:"1"},{task:"eat food",id:"2"}]);
 
  const addTaskHandler = task =>{
    setTaskList(taskList=>[...taskList,task]);
  }

  const deleteTaskHandler = taskId => {
       setTaskList(taskList.filter(function(task){
         return task.id !== taskId;
       }));
    }

  const updateTaskHandler = taskId => {

  }
  return (
    <div className="main">
      <AddTasks onAddTask={addTaskHandler}/>
      <ShowTasksList  taskList={taskList} onDeleteTask={deleteTaskHandler} onUpdateTask={updateTaskHandler}/>
    </div>
  );
}

export default App;
