import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showCounter, setshowCounter] = useState(true);

  return (
    <>
      <h1>Hooks Flow! Final UseEffect</h1>
      <input
        type="checkbox"
        onChange={() => setshowCounter((state) => !state)}
        checked={showCounter}
      ></input>
      Show the Counter
      {showCounter && <Counter count={count} setCount={setCount} />}
    </>
  );
}

function Counter({ count, setCount }) {
  useEffect(() => {
    console.log("- Effect on render del Counter");
    let intervalId = setInterval(() => {
      console.log("==== Hey!");
    }, 1000);
    return () => {
      console.log("Cleanup Function");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <button onClick={(event) => setCount((state) => state + 1)}>{count}</button>
  );
}

export default App;
