const { createSlice, nanoid } = require("@reduxjs/toolkit");
const { addTodo } = require("./slice");

const initialState = {
  studentsData: [{ name: "Rohan Vikash Rao", id: nanoid() }],
};

const studentSlice = createSlice({
  name: "studentData",
  initialState,

  reducers: {
    addStudent: (state, action) => {
      let data = action.payload;
      let student = {
        name: data,
        id: nanoid(),
      };
      state.studentsData.push(student);
    },

    deleteStudent: (state, action) => {
      let id = action.payload;
      state.studentsData = state.studentsData.filter((item) => item.id !== id);
    },

    removeAllStudents: (state) => {
      state.studentsData = [];
    },
  },
});

export const { addStudent, deleteStudent ,removeAllStudents} = studentSlice.actions;
export default studentSlice.reducer;
