import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { useSelector } from 'react-redux';


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="app">
      <h1>Advanced To-Do Application</h1>
      <Login />
      {isAuthenticated && (
        <>
          <h2>Welcome, {user.username}!</h2>
          <TaskInput />
          <TaskList />
        </>
      )}
    </div>
  );
};

export default App;