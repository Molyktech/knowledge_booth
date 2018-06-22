import React, {Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from './SignOut';
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

export default class NavAuth extends Component {
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
         <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">
                <img src="" className="" alt="KnowledgeBooth logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to={routes.HOME} className="nav-link link">Home</NavLink>
                    </NavItem>
                   
                    <NavItem>
                        <NavLink to="" className="nav-link link">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.ACCOUNT} className="nav-link link">Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={routes.SIGN_UP} className="nav-link link">Signup</NavLink>
                    </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                How it works
                            </DropdownToggle>
                            <DropdownMenu right>
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
                        <NavLink to="" className="nav-link link">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="" className="nav-link link"> <SignOutButton /></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}