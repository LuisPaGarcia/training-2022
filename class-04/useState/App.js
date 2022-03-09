// Use State

import React, { useState } from "react";

function App1() {
  const initialState = { id: 1, message: "Hello!" };
  const [message, messageSet] = useState(initialState);
  // 1
  const handleOnChange = (event) => {
    const newMessage = { message: event.target.value };
    messageSet(newMessage);
  };

  // 2
  const handleOnChangeUsingFunction = (event) => {
    messageSet((oldState) => {
      const newMessage = { message: event.target.value };
      const newState = { ...oldState, ...newMessage };
      return newState;
    });
  };

  // 3
  const handleOnChangeUsingFunctionRefactored = (event) =>
    messageSet((oldState) => ({ ...oldState, message: event.target.value }));

  return (
    <div>
      <h1>App 1 - Use State (Object)</h1>
      <form>
        <input
          onChange={handleOnChange /* Replace the handler with 2 or 3 */}
          value={message.message}
        />
        <pre>{JSON.stringify(message, null, 4)}</pre>
      </form>
    </div>
  );
}

// ************************************************
// ************************************************
// ************************************************

function App2() {
  const initialState = [1, 2, 3];
  const [messages, messagesSet] = useState(initialState);

  // 1
  const handleOnClick = (event) => {
    event.preventDefault();
    const arrayLastItem = messages.unshift();
    const valueToPush = arrayLastItem + 1;
    messagesSet([...messages, valueToPush]);
  };

  // 2
  const handleOnClickFunction = (event) => {
    event.preventDefault();
    const valueToPush = messages.unshift() + 1;
    messagesSet((oldState) => [...oldState, valueToPush]);
  };

  // 2
  const handleOnClickFunctionRefactored = (event) => {
    event.preventDefault();
    messagesSet((oldState) => [...oldState, oldState.unshift() + 1]);
  };

  return (
    <div>
      <h1>App 2 - Use State (array)</h1>
      <form>
        <button onClick={handleOnClick /* Replace the handler with 2 or 3 */}>
          Add new item to array
        </button>
        <pre>{JSON.stringify(messages)}</pre>
      </form>
    </div>
  );
}

// ************************************************
// ************************************************
// ************************************************

function customStateHook(initValue, increaseBy) {
  const [state, stateSet] = useState(initValue);
  const handleChange = (event) => {
    event.preventDefault();
    stateSet((oldState) => oldState + increaseBy);
  };
  return { state, handleChange, increaseBy };
}

function ComponentApp3(props) {
  return (
    <div>
      <form>
        <button onClick={props.handleChange}>+{props.increaseBy}</button>
        <h2>{props.state}</h2>
      </form>
    </div>
  );
}

function App3() {
  const { state, handleChange, increaseBy } = customStateHook(10, 10);

  return (
    <div>
      <h1>App 3 - Use State (Custom hook)</h1>
      <form>
        <button onClick={handleChange}>+ {increaseBy}</button>
        <h2>{state}</h2>
      </form>

      {/* 

      // Lets reuse the custom hook
      <ComponentApp3 {...customStateHook(0, 100)} />
      <ComponentApp3 {...customStateHook(900, 1)} />
      <ComponentApp3 {...customStateHook(13, 13)} /> 
      
      */}
    </div>
  );
}

// ************************************************
// ************************************************
// ************************************************

function App4() {
  console.log("App 4.", "render");

  // The function needs to return the initial value
  function getInitialValue() {
    console.log("App 4.", "get initial value");
    return window.localStorage.getItem("name") || "";
  }

  // Pass a function to the useState to lazy load the value
  // Will running just one time
  const [name, nameSet] = useState(getInitialValue); // <-- Passing the function here

  return (
    <div>
      <h1>App 4 - Use State (lazy load the value)</h1>
      <form>
        <label htmlFor="name">
          <input
            id="name"
            value={name}
            onChange={(event) => nameSet(event.target.value)}
          ></input>
        </label>
      </form>
    </div>
  );
}

export default () => {
  return (
    <div>
      <App1 />
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr />
      <App4 />
    </div>
  );
};
