import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();

  const fetchWeather = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: 'London',
          appid: '01928eaabad3e0bd5ff1c8e3a88a2f53', // Replace with your API key
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  const addTask = () => {
    if (task.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: task, priority, weather },
      });
      setTask('');
      setPriority('Medium');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <p>
          Current Weather in {weather.name}: {weather.main.temp}°C, {weather.weather[0].description}
        </p>
      )}
    </div>
  );
};

export default TaskInput;
