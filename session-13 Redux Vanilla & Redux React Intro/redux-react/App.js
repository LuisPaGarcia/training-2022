import React from "react";
// import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClickIncrement = (event) => {
    return dispatch(increment);
  };

  return (
    <div className="App">
      <h1>
        Hello World <br /> First App Using Redux
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={handleClickIncrement}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>Welcome! You're logged. 👾 ⚡️</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
