import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";

function App({
  counter,
  auth,
  handleClickIncrement,
  handleClickDecrement,
  handleClickReset,
  handleClickLogIn,
  handleClickLogOut,
}) {
  return (
    <div className="App">
      <h1>
        Hello World <br /> First App Using Redux
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={handleClickIncrement}>Increase</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickDecrement}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      {auth ? (
        <button onClick={handleClickLogOut}>LogOut</button>
      ) : (
        <button onClick={handleClickLogIn}>LogIn</button>
      )}
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

const mapToStateProps = ({ counter, auth }) => {
  return {
    counter,
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickIncrement: () => dispatch(increment),
    handleClickDecrement: () => dispatch(decrement()),
    handleClickReset: () => dispatch(reset()),
    handleClickLogIn: () => dispatch(logIn()),
    handleClickLogOut: () => dispatch(logOut()),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(App);
