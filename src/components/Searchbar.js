import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
      
        <div className="full-searchbar" id="searchform">
          <div className="container">
         
                <input type="text" id="input" placeholder="&#xf0e0; Enter your search" className="fontAwesome"/>
               
                  <button type="submit" id="search">Search</button>
              
          </div>
        </div>
      </div>
    )
  }
}
