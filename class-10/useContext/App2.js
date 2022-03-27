// useContext: simple Counter

import React, { useState } from "react";
const CountContext = React.createContext();

// 🐨 create your CountContext here with React.createContext
const CountProvider = (props) => {
  const [count, countSet] = useState(0);
  const value = [count, countSet];
  return <CountContext.Provider value={value} {...props} />;
};

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = React.useContext(CountContext);
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, countSet] = React.useContext(CountContext);
  const increment = () => countSet((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default App;
