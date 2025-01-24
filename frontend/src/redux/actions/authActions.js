export const register = (user) => ({ type: 'REGISTER', payload: user });
export const login = (user) => ({ type: 'LOGIN', payload: user });
export const logout = () => ({ type: 'LOGOUT' });
export const addTask = (task) => ({ type: 'ADD_TASK', payload: task });
export const deleteTask = (taskId) => ({ type: 'DELETE_TASK', payload: taskId });
