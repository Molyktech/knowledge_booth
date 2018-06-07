import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { ForgotPasswordLink } from './ForgotPassword';
import { auth } from '../firebase';
import * as routes from '../routes/routes';



const buttonStyle ={
  width: '100%',
  background: '#FF6E01',
  textAlign: 'center',
  color: '#FFf',
  borderRadius:'2px',
  height: '40px',
  boxShadow: 'none',
  marginTop: '-5px'
  
}
const center ={
  textAlign:'center',
  fontWeight: 'bold'
}
const SignInPage = ({ history }) =>
  <div className="signin-form">
    <h3 style={center}>Login With  Your Site Account</h3>
    <hr className="rule" />
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  checked: true
};

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
    .then(user => {
      this.setState(() => ({ ...INITIAL_STATE }));
      console.log(user.uid);
      if (this.state.checked){
        localStorage.setItem("token", user.uid)
      }
      history.push(routes.HOME);
      
    })
    .catch(error => {
      this.setState(byPropKey('error', error));
    });
    event.preventDefault();
   
  }
  render() {
    const { email, password, error } = this.state;
    const isInvalid =
    password === '' ||
    email === '';
    return (
      <form onSubmit={this.onSubmit} className="container mx-auto">
         <div className="form-group">
           
            <input 
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="email"
                placeholder="Email Address"
                className="form-control"
            />
          </div>
          <div className="form-group">
           
            <input 
                value={password}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type="password"
                placeholder="Password"
                className="form-control"   
            />
          </div>
          <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      value={this.state.checked}
                      className="form-check-input"
                      onChange={() => {this.setState({ checked: !this.state.checked}); console.log(this.state.checked)}}
                  />Remember me
                  </label>
                </div>
              </div>
              <div className="col-6">

                <ForgotPasswordLink />
              </div> 
         </div> 

          <div className="form-group mx-auto">
            <button 
            disabled={isInvalid}
            style={buttonStyle}
            type="submit">LOGIN
            </button>
            <SignUpLink />
        </div>
         {error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export{
  SignInForm
};
