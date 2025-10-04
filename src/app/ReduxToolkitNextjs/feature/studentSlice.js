const { createSlice, nanoid } = require("@reduxjs/toolkit");
const { addTodo } = require("./slice");

const initialState = {
  studentsData: [{ name: "Rohan Vikash Rao", id: nanoid }],
};

const studentSlice = createSlice({
  name: "studentData",
  initialState,

  reducers: {
    addStudent: (state, action) => {
      let data = action.payload;
      let student = {
        data,
        id: nanoid(),
      };
      state.studentsData.push(student);
    },

    deleteStudent: (state, action) => {
      let id = action.payload;
      state.studentsData = state.studentsData.filter((item) => item.id !== id);
    },
  },
});

export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
