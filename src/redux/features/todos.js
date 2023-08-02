import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //state.todos
  // is_Loading: false,
  inputValue: "",
  todos: [
    {
      id: 1,
      task: "Wash Clothes",
      is_completed: false,
    },
    {
      id: 2,
      task: "Have to complete my Maths HomeWork",
      is_completed: false,
    },
    {
      id: 3,
      task: "Have to Work on Front End Project",
      is_completed: true,
    },
    {
      id: 4,
      task: "Have to work on Backend Project",
      is_completed: true,
    },
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodoAction: (state, action) => {
      // console.log(action);
      state.todos.push(action.payload);
    },
    CompleteAllAction: (state) => {
      state.todos.map((todo) => {
        todo.is_completed = true;
      });
      return state;
    },
    DeleteAllCompletedAction: (state) => {
      const inCompleteTask = state.todos.filter(
        (todo) => todo.is_completed === false
      );
      state.todos = inCompleteTask;
      return state;
    },
    DeleteByIdAction: (state, action) => {
      const result = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = result;
      return state;
    },
    EditByIdAction: (state, action) => {
      console.log(action.payload);
      let object = state.todos.find((todo) => todo.id === action.payload.id);
      object.task = action.payload.task;
      return state;
    },
    EditCompleteStateAction: (state, action) => {
      console.log(action.payload);
      let object = state.todos.find((todo) => todo.id === action.payload);
      object.is_completed = !object.is_completed;
      console.log(object);
      return state;
    },
  },
});

export const {
  EditByIdAction,
  DeleteByIdAction,
  AddTodoAction,
  EditCompleteStateAction,
  CompleteAllAction,
  DeleteAllCompletedAction,
} = todoSlice.actions;

export default todoSlice.reducer;
