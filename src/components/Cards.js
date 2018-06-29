import React, { Component } from 'react'

const cardStyle = {
  width: '200px'
}

export default class Cards extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <div className="row">
          <div className="col-md-4 sm-4 card box" style={cardStyle}>
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/live.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
                <a href="" className="card-link">View more<span><img src="images/chevron-read-more.svg" alt="arrow"/>
                </span></a>
                
              </div>
            </div>
            <div className=" col-md-4 sm-4 card box" style={cardStyle}>
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/live.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
                <a href="" className="card-link">View more<span><img src="images/chevron-read-more.svg" alt="arrow"/>
                </span></a>
                
              </div>
            </div>
            <div className="col-md-4 sm-4 card box" style={cardStyle}>
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/learning.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
              <a href="" className="card-link">View more<span><img src="images/chevron-read-more.svg" alt="arrow"/>
              </span></a>
                
              </div>
            </div>
      </div>
      </div>
      </div>
    )
  }
}
