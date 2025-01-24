import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="app">
      <h1>Advanced To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;