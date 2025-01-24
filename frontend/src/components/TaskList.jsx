import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} - {task.priority}
          {task.weather && (
            <span>
              {' '}- Weather: {task.weather.main.temp}°C, {task.weather.weather[0].description}
            </span>
          )}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;