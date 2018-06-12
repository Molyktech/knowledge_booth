import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css'

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import ForgotPasswordPage from './ForgotPassword';
import HomePage from './Home';
import AccountPage from './Account';
import Users from './users';
import Searchbar from './Searchbar';

import * as routes from '../routes/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Searchbar />


      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.FORGOT_PASSWORD} component={() => <ForgotPasswordPage />} />
     
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.USERS} component={() => <Users />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
    </div>
  </Router>


  export default withAuthentication(App);