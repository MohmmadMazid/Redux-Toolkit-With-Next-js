import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ name: "mazid mansury", id: nanoid() }],
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
    },

    deleteTodo: (state, action) => {
      let id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },

    removeTodo: (state, action) => {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteTodo, removeTodo } = myTodoSlice.actions;
export default myTodoSlice.reducer;
