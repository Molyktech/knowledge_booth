import React, { Component } from 'react'

const icon = {
    height : '77px',
    width: '70px',
    marginTop: '-15px',
    paddingRight: '20px'
}
const teaching = {
    backgroundColor: '#ff6600',
    color: '#fff',
    height: '78px'
}
const label = {
    fontSize: '24px',
    padding: '10px'
}


export default class FooterHead extends Component {
  render() {
    return (
      <div>
            <div className="row">
                <div className="col-md-8">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="newsletter" style={label}>Newsletter</label>
                            <input type="email" id="newsletter" placeholder="Enter your email address" />
                            
                        </div>
                        <div className="form-group">
                            <button className="subscribe">Subscribe</button>
                        </div>
                
                    </form>
                </div>
                <div className="col-md-4" style={teaching}>
                    <div>
                        <div className="teaching-logo mt-3">
                            <img src="images/classroom.svg" alt="teacher teaching" className="svg news" style={icon}/>
                        </div>
                        <div>
                            <h5>Become a tutor</h5>
                            <p>Join and earn money hassle free.</p>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
    )
  }
}
