// this is page is making just for passing the reduxt data between pages
// passing the data between pages
"use client";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../ReduxToolkitNextjs/feature/slice";

const page = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  console.log(data.todos);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
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
        <h2>
          Getting data from the redux store , becasue <br />
          now redux store is the global store that can be accessed by any page
          or component
        </h2>
        <div>
          <h1>All Todos</h1>
          {data.todos.map((item) => {
            return (
              <div key={item.id}>
                <h2>Name:{item.name}</h2>
                <button onClick={() => handleDelete(item.id)}>
                  deleteTodo
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
