import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { ForgotPasswordLink } from './ForgotPassword';
import { auth } from '../firebase';
import * as routes from '../routes/routes';
import Footer from './Footer';



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
  fontWeight: 'bold',
  marginTop: '10px'
}
const SignInPage = ({ history }) =>
<div>
  <SignInHeader />
  <div className="signin-form">
   
    <h3 style={center}>Login With  Your Site Account</h3>
    <hr className="rule" />
    <SignInForm history={history} />
  </div>
  <Footer />
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
      history.push(routes.DASHBOARD);
      
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
class SignInHeader extends Component{
  render(){
    return(
      <div>
          <div id="header" className="jumbotron" style={{marginBottom: 0}}>   
          </div>
          <div className="container mx-auto" id="signin-section" >
              <h1 className="text-center">Log In With Your Social Accounts</h1>
                  
                      <div className="container">
                          
                          <div className="row mt-5 p-5">
                              <div className="col-md-6 d-flex justify-content-center">
                                  <a className=" btn btn-social btn-block btn-facebook fcbk">
                                      <i className="fa fa-facebook pull-left"></i> Facebook
                                  </a>
                                  
                              </div>
                              <div className="col-md-6  d-flex justify-content-center">
                                  <a className="btn btn-social btn-block btn-google-plus google">
                                      <i className="fa fa-google-plus"></i> Google
                                  </a>
                                                                  
                              </div>
                          </div>
                      </div>
                  
          </div>
        
            
      </div>
    )
  }
}

export default withRouter(SignInPage);

export{
  SignInForm,
  SignInHeader
};
