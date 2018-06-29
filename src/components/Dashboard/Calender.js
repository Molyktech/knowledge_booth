import React, { Component } from 'react'
import CalenderBody from './CalenderBody'
import ProfileCard from './ProfileCard'

export default class Calender extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProfileCard />
            </div>
        
          <div className="col-md-8">
            <main>
              <CalenderBody />
            </main>

          </div>
        </div>
        </div>
      </div>
    )
  }
}
