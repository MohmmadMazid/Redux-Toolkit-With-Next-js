import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feature/slice";
import studentslice from "./feature/studentSlice";
const store = configureStore({
  reducer: {
    todo: todoSlice,
    studentdata: studentslice,
  },
});

export default store;
