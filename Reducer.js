const initialState = [];

export const todos = (state = initialState, action) => {
      console.log(state);
      console.log(action);
      switch (action.type) {
          case 'ADD_TODO':
            return [ 
                   ...state,  
                   { id: action.id,
                     text: action.text,
                     completed: false,
                   },             
            ];  
          case 'TOGGLE_TODO':
            return state.map(todo => {
              if (todo.id !== action.id) {
                return todo;
              } else {
                return {
                  ...todo,
                  completed: !todo.completed,
                };
              }
            });    
          case 'CLEAR_TASKS':
            return state.map(todo => {
                return {
                  ...todo,
                  completed: false,
                };
            }); 
          case 'MARK_ALLTASK':
            return state.map(todo => {
                return {
                  ...todo,
                  completed: true,
                };
            });    
          default:
            return state;
      }
  }
