import usersReducer from "./usersReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

//The created store, with a new thing... A MIDDLEWARE
const store = createStore(usersReducer, applyMiddleware(thunk));

export default store;
