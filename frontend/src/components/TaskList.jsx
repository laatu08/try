import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/authActions';

const TaskList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.auth.users[user.username]?.tasks || []);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-list">
      <h3>{user.username}'s Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task-item priority-${task.priority.toLowerCase()}`}>
            {task.text}  <strong>{task.priority}</strong>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;