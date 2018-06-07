import React, { Component } from 'react'


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        
        <div className="landing">
          <div className="jumbotron">
              <div className="content">
                <h2>Take the first step </h2>
                <h3>To knowledge with us</h3>
                <h5>lorem ipsum dolor comet sinta</h5>
              </div>
                <div className="boxes">
                  <div className="box-inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 box">
                          <div className="hero-box d-flex flex-row align-items-center justify-content-start">
                            <img src="images/live.svg" className="svg" alt="" />
                              <div className="hero-box-content">
                                <h2 className="hero-box-title">Live Tutoring</h2>
                                <a href="" className="hero-box-link">View more <span>></span></a>
                              </div>
                          </div> 
                
                        </div>
                        <div className="col-lg-4 box">
                          <div className="hero-box d-flex flex-row align-items-center justify-content-start">
                            <img src="images/speech.svg" className="svg" alt="" />
                            <div className="hero-box-content">
                              <h2 className="hero-box-title">Online Learning</h2>
                              <a href="" className="hero-box-link">View more</a>
                            </div>
                          </div>  
                
                        </div>

                      <div className="col-lg-4 box">
                        <div className="hero-box d-flex flex-row align-items-center justify-content-start">
                          <img src="images/learning.svg" className="svg" alt="" />
                          <div className="hero-box-content">
                            <h2 className="hero-box-title">Online Learning</h2>
                            <a href="" className="hero-box-link">View more</a>
                          </div>
                        </div> 
                
                      </div>
              
              
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
