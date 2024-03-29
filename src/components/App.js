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
import Dashboard from './Dashboard/Dashboard';
import Watchlist from  './Dashboard/Watchlist';
import Payment from './Dashboard/Payment';
import Calendar from './Dashboard/Calender'

import * as routes from '../routes/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />
      


      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.FORGOT_PASSWORD} component={() => <ForgotPasswordPage />} />
     
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.USERS} component={() => <Users />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.DASHBOARD} component={() => <Dashboard />} />
      <Route exact path={routes.MYWATCHLIST} component={() => <Watchlist />} />
      <Route exact path={routes.PAYMENT} component={() => <Payment />} />
      <Route exact path={routes.CALENDAR} component={() => <Calendar />} />
    </div>
  </Router>


  export default withAuthentication(App);