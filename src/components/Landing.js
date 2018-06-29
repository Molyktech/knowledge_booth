import React, { Component } from 'react'

const imgStyle = {
  float: 'left',
  width: '150px',
  height: '150px',
  marginRight: '10px',
  marginLeft: '15px'

}
const boxStyle = {
  border: '1px solid #000',
  background: 'rgba(0, 0, 0, 0.9)',
  
  height: '170px',
  color: '#fff'
}
const icon = {
  width: '20px',
  height: '20px',
  marginLeft: '10px'
}
const text = {
  paddingTop: '15px',
  
}

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
          </div>
      </div>

      <div className="container transparent-card">
        <div className="row">
          <div className="col-md-4" >
            <div className="box" style={boxStyle}>
              <div>
                <img src="images/live.svg" alt="learning icon" className="box-icon" style={imgStyle}/>
                <h2 style={text}>Live <br />Tutoring</h2>
              </div>
                <a href="" className="card-link">View more<span><img style={icon} src="images/chevron-read-more.svg" alt="read more icon" />
                </span></a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box" style={boxStyle}>
              <div>
                <img src="images/speech.svg" alt="learning icon" style={imgStyle}/>
                <h2 style={text}>Live <br /> Tutoring</h2>
              </div>
                <a href="" className="card-link">View more<span><img style={icon} src="images/chevron-read-more.svg" alt="read more icon" />
                </span></a>
            </div>
        </div> 
        <div className="col-md-4">
          <div className="box" style={boxStyle}>
            <div>
              <img src="images/learning.svg" alt="learning icon" style={imgStyle}/>
              <h2 style={text}>Live <br />Tutoring</h2>
            </div>
                <a href="" className="card-link">View more<span><img style={icon} src="images/chevron-read-more.svg" alt="read more icon" />
                </span></a>
          </div>
      </div>
        </div>
    </div>

      
     </div>
  
     
    )
  }
}
