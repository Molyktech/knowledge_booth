import React, {Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../routes/routes';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
   
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



 export default class NavNonAuth extends Component {
        constructor (props) {
            super(props);
    
            this.toggle =this.toggle.bind(this);
            this.state = {
                isOpen: false
            };
        }
        toggle(){
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
render() {
return (
    <div>
        <Navbar expand="md" className="navbar">
            <div className="container">
                <NavbarBrand href="/home">
                   Knowledge Booth
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink  className="nav-link link" to={routes.HOME}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link link" to={routes.LANDING}>Landing</NavLink>
                        </NavItem>
                       
                       
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    About Us
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        How it works
                                    </DropdownItem>
                                    <DropdownItem>
                                        Public Forum
                                    </DropdownItem>
                                    <DropdownItem>
                                        Solution Library
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Become A Tutor
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                            <NavLink  className="nav-link link" to={routes.SIGN_IN}>Log In</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink  className="nav-link link" to={routes.SIGN_UP}>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link link" to="">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
      </div>
    );
  }
}
 
