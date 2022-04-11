// React useReducer

import React, { useReducer } from "react";

const initialState1 = { count: 0 };

function reducer1(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App1() {
  const [state, dispatch] = useReducer(reducer1, initialState1);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

// ************************************
// ************************************
// ************************************

function init2(initialCount) {
  return { count: initialCount };
}

function reducer2(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init2(action.payload);
    default:
      throw new Error();
  }
}

function App2({ initialCount }) {
  const [state, dispatch] = useReducer(reducer2, initialCount, init2);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

export default () => {
  return (
    <div>
      <App1 />
      <App2 />
    </div>
  );
};
