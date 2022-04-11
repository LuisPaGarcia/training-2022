// useEffect: persistent state

import React, { useEffect, useState } from "react";

function App1({ initialName = "" }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = useState(() => {
    return window.localStorage.getItem("name") || initialName;
  });

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  useEffect(() => {
    console.log("useEffect run", name);
    window.localStorage.setItem("name", name);
  });

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h1>App 1 - Use Effect (First view)</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

// ********************************
// ********************************
// ********************************

function App2({ initialName = "" }) {
  // Console log to see the render
  console.log("App2:", "Render App 2");

  // Init the state
  const [name, setName] = React.useState(
    () => window.localStorage.getItem("name2") || initialName
  );

  // Set the effect we want, with a dependency
  useEffect(() => {
    // Print the run effect message
    console.log("App2:", "Run useEffect");

    // Saving the name2 everytime
    window.localStorage.setItem("name2", name);
  }, [name]); // <--- Must add a dependency here to reduce the runs of useEffect

  // Change event handler
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>App 2 - Use Effect (First view)</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function WrapperApp2() {
  // Set the state
  const [count, countSet] = useState(0);

  // Click event handler
  const onClickHandler = () => {
    countSet((oldState) => oldState + 1);
  };
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h1>Parent component of App 2</h1>
      <button onClick={onClickHandler}>{count}: Click me!</button>
      <div style={{ marginLeft: "20px" }}>
        <App2 /> {/*  The Wrapper is rendering the App2 */}
      </div>
    </div>
  );
}

// ********************************
// ********************************
// ********************************

// Custom hook using state and effect
// Needs to Starts with `use`
function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]); // Adding the state and the key as dependencies

  return [state, setState];
}

function App3({ initialName = "" }) {
  // Moving all the logic to another function to reuse it
  const [name, setName] = useLocalStorageState("lastName", initialName);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <h1>App 3 - Create Reusable Hook</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <App1 />
      <hr></hr>
      <WrapperApp2 />
      <hr></hr> */}
      <App3 />
    </div>
  );
}

export default App;
