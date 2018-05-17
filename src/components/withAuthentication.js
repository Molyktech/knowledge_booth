import React from 'react';
import { firebase } from '../firebase';

//mechanism to pass down the authenticated user object to the other components
import AuthUserContext from './AuthUserContext';


const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
        const { authUser } = this.state;
  
        return (
          <AuthUserContext.Provider value={authUser}>
            <Component />
          </AuthUserContext.Provider>
        );
      }
    }

export default withAuthentication;