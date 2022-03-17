import React, { useState } from "react";
import largeArray from "./largeArray";
// import Todos from "./Todos"

const Todos = ({ todos }) => {
  console.log("List Render!");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(largeArray);

  const increment = () => {
    setCount((state) => state + 1);
  };

  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <Todos todos={todos} />
    </>
  );
};

export default App;
