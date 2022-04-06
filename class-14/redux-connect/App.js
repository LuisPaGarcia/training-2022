import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";

function App(/*{ counter,  auth,  handleClickIncrement,  handleClickDecrement,  handleClickReset,  handleClickLogIn,  handleClickLogOut,}*/) {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    return dispatch(increment);
  };

  return (
    <div className="App">
      <h1>
        Hello World <br /> First App Using Redux
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={handleClickIncrement /*handleClickIncrement*/}>
        Increase
      </button>
      <button onClick={() => dispatch(reset()) /*handleClickReset*/}>
        Reset
      </button>
      <button onClick={() => dispatch(decrement()) /*handleClickDecrement*/}>
        Decrease
      </button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      {auth ? (
        <button onClick={() => dispatch(logOut()) /*handleClickLogOut*/}>
          LogOut
        </button>
      ) : (
        <button onClick={() => dispatch(logIn()) /*handleClickLogIn*/}>
          LogIn
        </button>
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

// const mapToStateProps = (state) => {
//   return {
//     counter: state.counter,
//     auth: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleClickIncrement: () => dispatch(increment),
//     handleClickDecrement: () => dispatch(decrement()),
//     handleClickReset: () => dispatch(reset()),
//     handleClickLogIn: () => dispatch(logIn()),
//     handleClickLogOut: () => dispatch(logIn()),
//   };
// };

// export default connect(mapToStateProps, mapDispatchToProps)(App);

export default App;
