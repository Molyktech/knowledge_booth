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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
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
