import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AccountPage from './Account';
import HomePage from './Home';
import LandingPage from './Landing';
import Navigation from './Navigation';
import ForgotPasswordPage from './ForgotPassword'
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import './App.css';

import * as routes from '../routes/routes';
import { firebase } from  '../firebase';

class App extends Component {
  //temporarily handle state of an authenticated user till i learn redux
  constructor (props){
    super(props);

    this.state = {
      authUser: null
    };

  }

  componentDidMount(){
    //firebase listener for authenticated user
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null}));
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation  authUser={this.state.authUser} />
          <hr />
          <Route
            exact path={routes.LANDING} component={LandingPage}
          />
          <Route
            exact path={routes.SIGN_UP} component={SignUpPage}
          />
          <Route
            exact path={routes.SIGN_IN} component={SignInPage}
          />
          <Route
            exact path={routes.FORGOT_PASSWORD} component={ForgotPasswordPage}
          />
          <Route
            exact path={routes.HOME} component={HomePage}
          />
          <Route
            exact path={routes.ACCOUNT} component={AccountPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
