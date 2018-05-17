import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../routes/routes';

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1>SignInPage</h1>
      </div>
    )
  }
}
