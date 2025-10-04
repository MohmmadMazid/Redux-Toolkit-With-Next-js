"use client";
import { useDispatch } from "react-redux";
import { removeTodo } from "../ReduxToolkitNextjs/feature/slice";
const RemoveTodos = () => {
  const dispatch = useDispatch();
  //   const style = {
  //     height: "60px",
  //     width: "100px",
  //     backgroundColor: "darkBlue",
  //   };

  const handleRemove = () => {
    dispatch(removeTodo());
  };
  return (
    <div>
      <button
        style={{
          height: "60px",
          width: "200px",
          backgroundColor: "darkred",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: "700",
          fontSize: "larger",
        }}
        onClick={handleRemove}
      >
        RemoveTodos
      </button>
    </div>
  );
};

export default RemoveTodos;
