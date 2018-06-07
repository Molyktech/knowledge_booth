import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class Users extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Userd</h1>
       

        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users}) =>
    <div>
        <h2> List of Usernames of Users</h2>
        <p>(Saved on Sign Up iN FIREBASE Database</p>

        {Object.keys(users).map(key =>
            <div key={key}>{users[key].username}</div>
        )} 
    </div>


const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Users);
