import React,{useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Register from './components/Register';



const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleSwitchToRegister = () => setShowRegister(true);
  const handleSwitchToLogin = () => setShowRegister(false);

  return (
    <div className="app">
      <h1>Advanced To-Do Application</h1>
      {!isAuthenticated && !showRegister && <Login onSwitchToRegister={handleSwitchToRegister} />}
      {!isAuthenticated && showRegister && <Register onSwitchToLogin={handleSwitchToLogin} />}
      {isAuthenticated && user && (
        <>
          <Login></Login>
          <h2>Welcome, {user.username}!</h2>
          <TaskInput />
          <TaskList />
        </>
      )}
    </div>
  );
};


export default App;