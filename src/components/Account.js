import React from 'react';

import AuthUserContext from './AuthUserContext';
import { ForgotPasswordForm } from './ForgotPassword';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <ForgotPasswordForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

  const authCondition = (authUser) => !!authUser;

  export default withAuthorization(authCondition)(AccountPage);