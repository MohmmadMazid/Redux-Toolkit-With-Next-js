import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feature/slice";
const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
