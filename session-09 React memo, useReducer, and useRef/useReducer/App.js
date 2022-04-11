// React useReducer

import React, { useReducer } from "react";

// const initialState1 = { count: 0, error: "", user: "" };

function reducer1(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1, error: "" };
    case "decrement":
      return { ...state, count: state.count - 1, error: "" };
    default:
      return { count: 0, error: "Esta accion no existe" };
  }
}

function App1() {
  console.log("Render");
  const [state, dispatch] = useReducer(reducer1, initialState1);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "luispa" })}>luispa</button>
      {state.error && <p>{state.error}</p>}
    </>
  );
}

// ************************************
// ************************************
// ************************************

// const initialState1 = { count: 0 };

function init2(initialCount) {
  return { count: initialCount };
}

function reducer2(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.incrementBy };
    case "decrement":
      return { count: state.count - action.decrementBy };
    case "reset":
      return init2(action.payload);
    default:
      throw new Error();
  }
}

function App2({ initialCount, incrementBy = 1, decrementBy = 1 }) {
  const [state, dispatch] = useReducer(reducer2, initialCount, init2);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement", decrementBy: decrementBy })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({ type: "increment", incrementBy: incrementBy })
        }
      >
        +
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: "Luispa", incrementBy: incrementBy })}
      >
        Luispa
      </button>
    </>
  );
}

export default () => {
  return (
    <div>
      {/* <App1 /> */}
      <App2 initialCount={10} incrementBy={100} />
      <App2 initialCount={100} decrementBy={3} />
      <App2 initialCount={300} />
    </div>
  );
};
