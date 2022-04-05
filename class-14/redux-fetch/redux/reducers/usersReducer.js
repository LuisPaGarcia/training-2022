import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST_FAIL,
} from '../actions/formActions';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        users: [],
        loading: true,
        error: null,
      };
    case FETCH_USERS_REQUEST_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USERS_REQUEST_FAIL:
      return {
        users: [],
        loading: false,
        error: action.error,
      };
  }
  return state;
};
export default usersReducer;
