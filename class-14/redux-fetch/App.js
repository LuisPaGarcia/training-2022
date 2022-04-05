import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './redux/actions/formActions';

function App({ fetchUsers, usersData }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {usersData.loading ? (
        <h2>Loading users ...</h2>
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
  return {
    usersData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapToStateProps, mapDispatchToProps)(App);
