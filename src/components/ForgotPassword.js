import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const center ={
  textAlign:'center',
  fontWeight: 'bold',
  marginTop: '18px'
}
const buttonStyle ={
  width: '100%',
  background: '#FF6E01',
  textAlign: 'center',
  color: '#FFF',
  borderRadius:'2px',
  height: '40px',
  boxShadow: 'none',
  marginTop: '-5px'
  
}
const FormContainer={
  width: '500px',
  border: '1px solid #ff6600',
  background: '#FEFEFA',
  margin: '50px 10px',
  borderRadius: '5px'
}
const ForgotPasswordPage = () => 
<div style={FormContainer}  className="container mx-auto">
  <h1 style={center}>Forgot Password?</h1>
  <p className="text-center">Enter your email and we would send you a link to reset your Password</p>
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
      <form onSubmit={this.onSubmit} className="container mx-auto">
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="email"
          placeholder= "Email Address"
          className="form-control"
        />
        <div className="form-group mx-auto">
        <button 
        disabled={isInvalid} 
        style={buttonStyle}
        type="submit"
        > Reset My Password</button>
        </div>

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