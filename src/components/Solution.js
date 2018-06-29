import React, { Component } from 'react'

const icon = {
    width: '20px',
    height: '20px'
  }

export default class Solution extends Component {
  render() {
    return (
      <div>
      <div id="solution">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <h3 className="title">Solution Library</h3>
                  <ol >
                      <li>
                          <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                      </li>
                      <li>
                          <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                      </li>
                      <li>
                          <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                      </li>
                      <li className="solution-link">
                          <a href="Solution.html" className="solution-library">View more <span>
                              <img src="images/right-chevron-.svg" alt="arrow" style={icon}/>
                          </span></a>
                      </li>   
                    </ol>
                  
              </div>

              <div className="col-md-6 forum">
                      <h3 className="title">Public Forum</h3>
                      <ul>
                          <li>
                              <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                          </li>
                          <li>
                              <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                          </li>
                          <li>
                              <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima perferendis excepturi eos incidunt iste ipsam quibusdam dolores perspiciatis magnam eveniet?</p>
                          </li>
                          <li>
                                  <a href="Solution.html" className="solution-library">View more <span>
                                      <img src="images/right-chevron-.svg" alt="arrow" style={icon}/>
                                  </span></a>
                          </li> 
                      </ul>
                      
                  </div>
          </div>
      </div>

  </div>
        
      </div>
    )
  }
}
