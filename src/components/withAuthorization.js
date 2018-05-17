// protection route for when the user signs out

import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';
import * as routes from '../routes/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
            //if the authorization fails, the higher order component redirects to the sign in page
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return (
          //enders either the passed component (e.g. HomePage, AccountPage) or nothing. 
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;