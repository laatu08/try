const initialState = {
    isAuthenticated: false,
    user: null,
    users: JSON.parse(localStorage.getItem('users')) || {}, // Persistent storage for users
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER': {
        const updatedUsers = { ...state.users, [action.payload.username]: { tasks: [] } };
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        return { ...state, users: updatedUsers };
      }
      case 'LOGIN':
        return { ...state, isAuthenticated: true, user: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      case 'ADD_TASK': {
        const updatedUsers = {
          ...state.users,
          [state.user.username]: {
            tasks: [...state.users[state.user.username].tasks, action.payload],
          },
        };
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        return { ...state, users: updatedUsers };
      }
      default:
        return state;
    }
  };
  
  export default authReducer;