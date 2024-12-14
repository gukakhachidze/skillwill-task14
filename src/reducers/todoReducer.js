export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "COMPLETE_TASK":
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== action.payload),
        completedList: [...state.completedList, state.todoList[action.payload]],
      };
    case "DELETE_TASK":
      return {
        ...state,
        completedList: state.completedList.filter(
          (_, index) => index !== action.payload
        ),
      };
    case "MOVE_TO_TODO":
      return {
        ...state,
        completedList: state.completedList.filter(
          (_, index) => index !== action.payload
        ),
        todoList: [...state.todoList, state.completedList[action.payload]],
      };
    default:
      return state;
  }
};
