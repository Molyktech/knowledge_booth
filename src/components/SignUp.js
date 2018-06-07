import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../routes/routes';
//add another API request to create a user when the user signed up successfully.
import { auth, db } from '../firebase';

const buttonStyle ={
    textAlign: 'center'
}
const center ={
    textAlign:'center'
}


const SignUpPage = ({ history }) =>
    <div>
        <h1 style={center}>Sign Up</h1>
        <SignUpForm  history={history} />
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName] :value,
})
class SignUpForm extends Component {
    constructor(props){
        super(props);
            this.state = { ...INITIAL_STATE};
    }
    onSubmit = (event) => {
        const {username, email, passwordOne} = this.state;
        const { history } = this.props;
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {

            // create a user in my accessible firebase
            db.doCreateUser(authUser.user.uid, username, email)
            .then(() => {
            this.setState(() => ({ ...INITIAL_STATE}));
            history.push(routes.HOME);
        })
            .catch(error => {
                this.setState(byPropKey('error', error))
            });
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
        event.preventDefault();
    }
  render() {
      const { username, email, passwordOne, passwordTwo, error } = this.state
      //validation for the form
      const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <form onSubmit={this.onSubmit} className="container" >
        <div className="form-group mx-auto">
            <label for="usr">Full Name:</label>
                <input 
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Please type your Full Name"
                    className="form-control"
                    
                />
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
                <input 
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="email"
                    placeholder="Please type your Email Address"
                    className="form-control"
                />
        </div>
        <div className="form-group">
            <label for="pwd">Password:</label>
                <input 
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Type a secure password"
                    className="form-control"
                />
        </div>
        <div className="form-group">
            <label for="pwd2">Confirm Password:</label>
                <input 
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                />
        </div>
        <div className="form-group" style={buttonStyle}>
            <button 
            className="btn btn-warning"
            disabled={isInvalid} 
            type="submit">SIGN UP
            </button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}
const SignUpLink =() =>
<p className="signup-link">
    Not a member yet?
    {' '}
    <Link to={routes.SIGN_UP}>Register now</Link>

</p>

export default  withRouter(SignUpPage);

export{
    SignUpForm,
    SignUpLink,
};
