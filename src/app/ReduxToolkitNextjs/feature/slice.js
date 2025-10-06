import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid,
} from "@reduxjs/toolkit";
import { act } from "react";

const getInitialTodos = () => {
  if (typeof window !== "undefined") {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  }
  return [];
};

const initialState = {
  // todos: [{ name: "mazid mansury", id: nanoid() }],
  // todos: JSON.parse(localStorage.getItem("todos")) || [],
  todos: getInitialTodos(),
  isLoading: true,
  error: null,
  postsData: [],
};

export const postsData = createAsyncThunk("usersData", async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

const myTodoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      let name = action.payload;
      let newTodo = {
        name: name,
        id: nanoid(),
      };
      state.todos.push(newTodo);
      let empdata = JSON.stringify(current(state.todos));
      localStorage.setItem("todos", empdata);
    },

    deleteTodo: (state, action) => {
      let id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    removeTodo: (state, action) => {
      state.todos = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postsData.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(postsData.fulfilled, (state, action) => {
      state.postsData = action.payload;
      state.error = null;
    });
    builder.addCase(postsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addTodo, deleteTodo, removeTodo } = myTodoSlice.actions;
export default myTodoSlice.reducer;
