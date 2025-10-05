import { createSlice, current, nanoid } from "@reduxjs/toolkit";

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
};

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
});

export const { addTodo, deleteTodo, removeTodo } = myTodoSlice.actions;
export default myTodoSlice.reducer;
