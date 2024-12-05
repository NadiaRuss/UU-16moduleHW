import React from 'react';
import './styles/App.css';
import TaskInput from './features/todo/TaskImput';
import TaskList from './features/todo/TaskList';
import FilterTasks from './features/todo/FilterTasks';


const App = () => {

  return (
    <div className='App'>
      <h1 className='h1'> To-do List</h1>
      <FilterTasks />
      <TaskInput />
      <h2 className='h2'>Задачи:</h2>
      <TaskList />
    </div>
  )
}

export default App
