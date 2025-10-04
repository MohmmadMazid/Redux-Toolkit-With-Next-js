"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../ReduxToolkitNextjs/feature/slice";
import Link from "next/link";
const AddTodos = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodo(name));
    setName("");
  };

  return (
    <div>
      <div>
        <h3>Add Todos</h3>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>submit</button>
        <br />
        <Link href="/delete-todo">Goto-delete-todo</Link>
      </div>
    </div>
  );
};

export default AddTodos;
