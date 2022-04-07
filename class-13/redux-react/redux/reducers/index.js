import counter from "./counterReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counter,
  auth: auth,
});
export default allReducers;
