import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ShowTasksList from './components/ShowTasksList';

function App() {

  const [tasksList, setTasksList] = useState([{ task: "cook food", id: "1", editFlag: false }, { task: "eat food", id: "2", editFlag: false }]);

  //Adding a new task to the list
  const addTaskHandler = newTask => {
    setTasksList(tasksList => [...tasksList, newTask]);
  }

  //deleting a task with a given taskId
  const deleteTaskHandler = taskId => {
    setTasksList(tasksList.filter(function (task) {
      return task.id !== taskId;
    }));
  }

  //updating a task with a given taskId
  const updateTaskHandler = (taskId, editedTask = '', flag) => {
    // console.log(taskId)
    const indexToBeEdited = tasksList.findIndex(task => task.id === taskId)
    // console.log(tasksList[taskToBeEdited]);
    const newTasksList = [...tasksList];

    if (editedTask !== '') {
      newTasksList[indexToBeEdited].task = editedTask;
      newTasksList[indexToBeEdited].editFlag = false;
    } else
      newTasksList[indexToBeEdited].editFlag = flag;
    setTasksList(newTasksList);

  }
  return (
    <div className="main">
      <AddTask onAddTask={addTaskHandler} />

      <ShowTasksList tasksList={tasksList} onDeleteTask={deleteTaskHandler} onUpdateTask={updateTaskHandler} />
    </div>
  );
}

export default App;
