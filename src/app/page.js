import Image from "next/image";
import ShowTodo from "./components/ShowTodo";
import AddTodos from "./components/AddTodos";
import RemoveTodos from "./components/RemoveTodos";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Redux Toolkit With Next js</h1>
      </div>
      <div>
        <AddTodos />
        <ShowTodo />
        <RemoveTodos />
      </div>
    </div>
  );
}
