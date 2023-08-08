
import './App.css';
import ToDoForm from './components/ToDoForm';
import DisplayToDo from './components/DisplayToDo';
import React, { useState } from 'react';


function App() {

  const [nextToDo, setNextToDo] = useState([])

  const addToDoList = (task) => {
    setNextToDo([...nextToDo, task])
  }

  const removeItemWithIdx = (deleteArrIdx) => {
    const filteredList = nextToDo.filter((eachToDo, idx) => deleteArrIdx !== idx)
    setNextToDo(filteredList);
  }

  const updateCompletedWithIdx = (targetIdx, targetBool) => {
    const updatedTask = nextToDo.map((eachTask, idx) => {
      if (targetIdx === idx) {
        return { ...eachTask, isCompleted: targetBool };
      }
      else {
        return eachTask;
      }
    })
    setNextToDo(updatedTask)
  }

  return (
    <div className="App">
      <ToDoForm onCreate={addToDoList}></ToDoForm>
      <DisplayToDo nextToDo={nextToDo} removeItemWithIdx={removeItemWithIdx} updateCompletedWithIdx={updateCompletedWithIdx}></DisplayToDo>
    </div>
  );
}

export default App;
