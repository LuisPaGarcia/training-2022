// useContext: simple Counter

import React from "react";
import { CountProvider, useCount } from "./context/count-context";

function CountDisplay() {
  const [count] = useCount();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const [, countSet] = useCount();
  const increment = () => countSet((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
        {/* Unwrap Counter */}
      </CountProvider>
    </div>
  );
}

export default App;
