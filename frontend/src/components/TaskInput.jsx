import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions/authActions';
import axios from 'axios';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, priority }));
      setTask('');
      setPriority('Medium');
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'London', // Replace with dynamic user input if needed
          appid: '01928eaabad3e0bd5ff1c8e3a88a2f53', // Replace with your OpenWeatherMap API key
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <div className="task-input">
      <h3>Add a Task</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={`Enter a task for ${user.username}`}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <p>
          Weather in {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      )}
    </div>
  );
};

export default TaskInput;