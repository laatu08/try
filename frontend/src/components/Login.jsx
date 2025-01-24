import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/authActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }));
      setUsername('');
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