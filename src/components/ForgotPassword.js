import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const ForgotPasswordPage = () => 
<div>
  <h1>Forgot Password?</h1>
  <ForgotPasswordForm />
</div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE ={
  email: '',
  error: null
};

class ForgotPasswordForm extends Component {
  constructor(props){
    super(props);
     this.state ={ ...INITIAL_STATE };
  }
  
  onSubmit = (event) => {
    const { email } = this.state;
    auth.doPasswordReset(email)
    .then(() => {
      this.setState(() => ({ ...INITIAL_STATE}));
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });
    event.preventDefault();
  }
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="email"
          placeholder= "Email Address"
        />
        <button disabled={isInvalid} type="submit"> Reset My Password</button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

const ForgotPasswordLink = () =>
<p>
  <Link to="forgot-pw">Forgot Password?</Link>
</p>

export default ForgotPasswordPage;

export {
  ForgotPasswordForm,
  ForgotPasswordLink
};