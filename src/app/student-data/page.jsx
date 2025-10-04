"use client";
import { useSelector, useDispatch } from "react-redux";
import studentSlice from "../ReduxToolkitNextjs/feature/studentSlice.js";
import {
  addStudent,
  deleteStudent,
  removeAllStudents,
} from "../ReduxToolkitNextjs/feature/studentSlice.js";
import { useState } from "react";
const StudentsData = () => {
  const [student, setStudent] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.studentsData.studentsData);
  console.log("student data ", data);

  const handleInputChange = (e) => {
    setStudent(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addStudent(student));
    setStudent("");
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleClearAll = () => {
    dispatch(removeAllStudents());
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>All Student data </h1>
      </div>
      <div>
        <h3>Adding Student Data</h3>
        <input
          type="text"
          name="name"
          placeholder="enter student name"
          value={student}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSubmit}>Add Student</button>
        <button onClick={handleClearAll}>clear All Student</button>
      </div>
      <div>
        <h1>Showing All The Students</h1>
        {data.length &&
          data.map((item) => {
            return (
              <h3 key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default StudentsData;
