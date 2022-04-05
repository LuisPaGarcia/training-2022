import redaxios from "redaxios";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_REQUEST_SUCCESS = "FETCH_USERS_REQUEST_SUCCESS";
export const FETCH_USERS_REQUEST_FAIL = "FETCH_USERS_REQUEST_FAIL";

export const fetchUsersRequest = () => {
  // Returning an object :)
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersRequestSuccess = (users) => {
  // Returning an object :)

  return {
    type: FETCH_USERS_REQUEST_SUCCESS,
    payload: users,
  };
};

export const fetchUsersRequestFail = (error) => {
  // Returning an object :)
  return {
    type: FETCH_USERS_REQUEST_FAIL,
    error: error,
  };
};

const pause = (data, waitInMs) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, waitInMs);
  });

export const fetchUsers = () => {
  // Returning a funcion?!!! Thanks to the middleware
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    redaxios
      .get("https://jsonplaceholder.typicode.com/users")
      // synthetic pause
      .then((response) => pause(response, 3000))
      // synthetic pause
      .then((response) => {
        const data = response.data;
        dispatch(fetchUsersRequestSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message || "Error on fetch users";
        dispatch(fetchUsersRequestFail(errorMsg));
      });
  };
};
