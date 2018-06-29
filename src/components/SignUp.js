import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Footer from './Footer';

import * as routes from '../routes/routes';
//add another API request to create a user when the user signed up successfully.
import { auth, db } from '../firebase';

const buttonStyle ={
   width: '400px',
   textAlign: 'center',
   backgroundColor: '#ff6600',
   color: '#fff',
   border: '1px solid #ff6600',
   height: '40px'
   
}
const center ={
    textAlign:'center'
}


const SignUpPage = ({ history }) =>
    <div>
        <RegisterHeader />
        <RegisterBody history = {history} />
        <Footer />
       
    </div>


const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName] :value,
})



class RegisterHeader extends Component {
    render(){
        return(
        <div>
                <div id="header" className="jumbotron" style={{marginBottom: 0}}>   
                </div>
              
            
        </div>
        )
    }
}
class RegisterBody extends Component{
    constructor(props){
        super(props);
            this.state = { ...INITIAL_STATE};
    }
    onSubmit = (event) => {
        const {firstname, lastname, username, email, passwordOne} = this.state;
        const { history } = this.props;
        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {

            // create a user in my accessible firebase
            db.doCreateUser(authUser.user.uid, firstname, lastname, username, email)
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
    render(){
        const { firstname, lastname, username, email, passwordOne, passwordTwo, error } = this.state
      //validation for the form
      const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
        return(
    <div>   
        <div className="container" id="register">
            <div className="">
                <h1 className="text-center">Are you!</h1>
                <div className="container"> 
                    <div className=" h-100 row justify-content-centre align-items-centre">
                        <div className="col-sm-5 justify-content-centre">
                            <div className="square">
                                <figure>
                                    <img src="images/teacher-reading.svg" alt="teacher" />
                                    <figcaption  className="img-text">Teacher</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-sm-2 justify-content-centre">
                            <h3 className="text-center text-muted p-5">OR</h3>
                        </div>
                       
                        <div className="col-sm-5 justify-content-centre">
                            <div className="square">
                                <figure>
                                    <img src="images/reading.svg" alt="student" />
                                      <figcaption className="img-text">Student</figcaption>
                                </figure>
                            </div>
                        </div>


                    </div>

               
                <hr className="bg-secondary mx-4 mt-4 mb-1" />

                    <div id="section-social buttons" className="mt-4">
                        <h1 className="text-center">Great to See You Here!</h1>
                        <div className="container">
                            
                            <div className="row mt-5 p-5" >
                                <div className="col-md-4">
                                    <a className=" btn btn-social btn-block btn-facebook">
                                        <i className="fa fa-facebook pull-left"></i> Facebook
                                    </a>
                                    
                                </div>
                                <div className="col-md-4">
                                     <a className="btn btn-social btn-block btn-google-plus">
                                        <i className="fa fa-google-plus"></i> Google
                                    </a>
                                                                    
                                </div>
                                <div className="col-md-4">
                                    <a className="btn btn-social btn-twitter  btn-block btn-warning">
                                        <i className="fa fa-twitter"></i> Mali Account
                                    </a>
                                    
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
                <hr className="bg-secondary mx-2 mt-4 mb-1" />

                <div className="register-form">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-9">
                                <h3>Personal Information</h3>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputFirstname"
                                            placeholder="First Name"
                                            value={firstname}
                                            onChange={event => this.setState(byPropKey('firstname', event.target.value))}
                                             />
                                        </div>
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="inputLastname"
                                            placeholder="Last Name"
                                            value={lastname}
                                            onChange={event => this.setState(byPropKey('lastname', event.target.value))}
                                             />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                            <div className="col-sm-6">
                                               
                                                <input 
                                                type="text" 
                                                className="form-control" 
                                                id="username" 
                                                placeholder="Screen Name"
                                                value={username}
                                                onChange={event => this.setState(byPropKey('username', event.target.value))}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                    
                                                
                                                <label>Gender</label>
                                                <label className="radio-inline"> 
                                                <input type="radio" name="gender"/>Female</label>
                                                <label className="radio-inline">
                                                <input type="radio" name="gender" />Male</label>
                                              

                                            </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                           
                                                <select className="form-control" id="age" required>
                                                    <option value="" hidden>Select Age</option>
                                        
                                                    <option value="">12</option>
                                                    <option value="">13</option>
                                                    <option value="">14</option>
                                                    <option value="">15</option>
                                                    <option value="">16</option>
                                                    <option value="">17</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                        
                                                </select>         
                                             
                                        </div>
                                        <div className="col-sm-6">
                                           
                                                <select className="form-control" id="university" required>
                                                    <option value="" hidden>university/School</option>
                                        
                                                    <option value="">12</option>
                                                    <option value="">13</option>
                                                    <option value="">14</option>
                                                    <option value="">15</option>
                                                    <option value="">16</option>
                                                    <option value="">17</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                        
                                                </select>         
                                          

                                        </div>
                                    </div>
                                    <h3>Contact Information</h3>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="street"
                                            placeholder="Street"
                                            
                                             />
                                        </div>
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="city"
                                            placeholder="City"
                                            
                                             />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                           
                                                <select className="form-control" id="country" required>
                                                    <option value="" hidden>Country</option>
                                        
                                                    <option value="">Nigeria</option>
                                                    <option value="">Ghana</option>
                                                    <option value="">United States</option>
                                                    <option value="">England</option>
                                                   
                                        
                                                </select>         
                                             
                                        </div>
                                        <div className="col-sm-6">
                                           
                                                <select className="form-control" id="university" required>
                                                    <option value="" hidden>university/School</option>
                                        
                                                    <option value="">university of Nigeria</option>
                                                    <option value="">university of Abuja</option>
                                                   
                                        
                                                </select>         
                                          

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="number" 
                                            className="form-control" 
                                            id="phone" 
                                            placeholder="Contact No."
                                            
                                            />
                                        </div>
                                    </div>
                                    
                                    <h3>Login Information</h3>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                                             />
                                        </div>
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="city"
                                            placeholder="City"
                                            
                                             />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            id="passwordOne"
                                            placeholder="Password"
                                            value={passwordOne}
                                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                             />
                                        </div>
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="password" 
                                            className="form-control" 
                                            id="passwordTwo"
                                            placeholder="Confirm Password"
                                            value={passwordOne}
                                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                                            
                                             />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <label htmlFor="captcha">Secuity Check</label>
                                            <textarea className="form-control" id="security">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Code Here"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                        
                                            <input 
                                            type="checkbox" 
                                            
                                            />Accept Terms and Conditions
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <button 
                                            style={buttonStyle}
                                            disabled={isInvalid} 
                                            type="submit">SIGN UP
                                            </button>
                                            <LogInLink />
                                        </div>
                                    </div>

                                    {error && <p>{error.message}</p>}



                                </form>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
            
            </div>
        </div>
    </div>
            
        )
    }
}
const SignUpLink =() =>
<p className="signup-link">
    Not a member yet?
    {' '}
    <Link to={routes.SIGN_UP}>Register now</Link>

</p>
const LogInLink =() =>
<p className="login-link">
    Already have an Account?
    {' '}
    <Link to={routes.SIGN_IN}>Login</Link>

</p>

export default  withRouter(SignUpPage);

export{
   
    SignUpLink,
    LogInLink,
    RegisterHeader,
    RegisterBody
};
