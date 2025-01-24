import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const handleRegister = () => {
    if (username.trim()) {
      if (users[username]) {
        alert('Username already exists. Please choose a different username.');
      } else {
        dispatch(register({ username }));
        setUsername('');
        alert('Registration successful! Please log in.');
        onSwitchToLogin();
      }
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
