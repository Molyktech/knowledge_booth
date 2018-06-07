import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    return (
      <div className="mini-nav">
          <div className="top-menu">
                <div className="container">
                    <ul className="nav left-item">
                        <a className="nav-item welcome"> Welcome User!</a>
                        <ul className="nav ml-auto right-item">
                            
                            <li className="nav-item">
                                <form className="search form-inline">
                                    <input type="text" className="form-control" placeholder="Start typing..."/>
                                    <button className="btn-search" type="submit"><i className="fa fa-search fa-fw"></i></button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-xs" type="button"><i className="fa fa-globe"></i> English</button>
                            </li>
                        </ul>
                    </ul>

                </div>
          </div>
        
      </div>
    )
  }
}
