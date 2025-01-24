import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from '../redux/actions/authActions';

const Login = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  const handleLogin = () => {
    if (username.trim() && users[username]) {
      dispatch(login({ username }));
      setUsername('');
    } else {
      alert('User not found. Please register first.');
      onSwitchToRegister();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="login">
      {isAuthenticated ? (
        <div>
          <p>Welcome!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;