// React: useRef
import React, { useEffect, useState, useRef } from "react";

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

function Messenger() {
  const [count, setCount] = useState(0);
  const messagesEnqueued = useRef(0);

  function sendMessage() {
    setCount(count + 1);
  }

  messagesEnqueued.current = count;

  useEffect(
    function () {
      setTimeout(function () {
        console.log(count);
        console.log(`Messages enqued: ${messagesEnqueued.current}`);
      }, 3000);
    },
    [count]
  );

  return (
    <div>
      <input type="button" value="Enviar mensaje" onClick={sendMessage} />
      <div>Mensajes enviados {count}</div>
      <div>Mensajes enviados {messagesEnqueued.current}</div>
    </div>
  );
}

export default () => {
  return (
    <>
      <App1 />
      <hr />
      <div className="App">
        <h1>useRef, looking to the future</h1>
        <Messenger />
      </div>
    </>
  );
};
