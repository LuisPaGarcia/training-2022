import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/actions/formActions";

function App({ fetchUsersProp, usersData }) {
  useEffect(() => {
    fetchUsersProp();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {usersData.loading ? (
        <h2>Loading users ...</h2>
      ) : usersData.error ? (
        <h2>{usersData.error}</h2>
      ) : (
        <ul>
          {usersData.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {JSON.stringify(
        {
          loading: usersData.loading,
          error: usersData.error,
          users: usersData.users,
        },
        null,
        2
      )}
    </div>
  );
}

const mapToStateProps = (state) => {
  // {
  //   loading: state.loading,
  //   error: state.error,
  //   users: state.users,
  // }
  return {
    usersData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersProp: () => dispatch(fetchUsers()),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(App);
