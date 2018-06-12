import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    return (
      <div>
      <div className="container">
      <div className="row">
          <div className="card box">
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/live.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
                <a href="" className="card-link">View more<span><img src="images/images/read-more.png" alt="read more icon" />
                </span></a>
                
              </div>
            </div>
            <div className="card box">
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/live.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
                <a href="" className="card-link">View more<span><img src="images/images/read-more.png" alt="read more icon" />
                </span></a>
                
              </div>
            </div>
            <div className="card box">
              <div className="card-body">
               <div className="row">
                <div className="col-6">
                  <img src="images/images/learning.svg" alt="logo" />
                 </div>
                 <div className="col-6">
                   <h3 className="box-text">Live Tutoring</h3>
                   
                 </div>
                
                </div>
              <a href="" className="card-link">View more<span><img src="images/images/read-more.png" alt="read more icon" />
              </span></a>
                
              </div>
            </div>
      </div>
      </div>
      </div>
    )
  }
}
