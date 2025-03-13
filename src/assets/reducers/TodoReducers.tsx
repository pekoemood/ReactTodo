const todoReducer = (state, action) => {
  switch(action.type){
    case 'addTask':
      const newState = [...state, {id: action.id, task: action.task}]
      return newState;

    case 'deleteTask':
      const newState = state.filter((task) => task.id !== action.id);
      return newState;
      
    case 'editTask':
      
  }
}