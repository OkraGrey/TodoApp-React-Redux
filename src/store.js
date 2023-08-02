import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./redux/features/todos";
const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
export default store;
