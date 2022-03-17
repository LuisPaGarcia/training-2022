// React: useRef
import React, { useRef } from "react";

function App1() {
  const inputRef = useRef(null);
  const handleInput = () => {
    console.log(inputRef.current);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <form>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleInput}>Erase!</button>
      </form>
    </div>
  );
}

export default () => {
  return (
    <>
      <App1 />
    </>
  );
};
