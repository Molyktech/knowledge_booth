import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import * as routes from '../../routes/routes';

export default class DashNav extends Component {
  render() {
    return (
      <div>
      <div id= "nav-show">
      <nav id="dash-nav">
          <ul  className="nav justify-content-end">
            <li  className="nav-item">
              <NavLink  className="nav-link active" to={routes.DASHBOARD}>Session</NavLink>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="">Calendar</a>
            </li>
            <li  className="nav-item">
              <a  className="nav-link" href="">My Orders</a>
            </li>
            <li  className="nav-item">
              <NavLink  className="nav-link" to={routes.PAYMENT}>My Payments</NavLink>
            </li>
            <li  className="nav-item">
              <NavLink  className="nav-link" to={routes.MYWATCHLIST}>My Watchlist</NavLink>
            </li>
          </ul>
      </nav>
      
  </div>
        
      </div>
    )
  }
}
