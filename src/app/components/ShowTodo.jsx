"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../ReduxToolkitNextjs/feature/slice";
const ShowTodo = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const alltodos = data.todos;
  console.log("all todos are here", data);
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "larger",
          color: "darkcyan",
          backgroundColor: "peru",
        }}
      >
        My Todos Page
      </div>
      {alltodos.map((item) => {
        return (
          <div key={item.id}>
            <h2 style={{ display: "inline-block" }}>Name :{item.name}</h2>
            <button
              style={{
                color: "white",
                backgroundColor: "darkblue",
                margin: "10px",
                padding: "10px",
                width: "100px",
                fontSize: "20px",
                fontWeight: "700",
                border: "none",
                borderRadius: "10px",
              }}
              onClick={() => handleDeleteTodo(item.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodo;
