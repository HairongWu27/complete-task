
let nextTodoId = 0;
  export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  });

  export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
  });

  export const clearTask = () => ({
    type: 'CLEAR_TASKS',
    
  });

  export const markAllTask = () => ({
    type: 'MARK_ALLTASK',  
  });
