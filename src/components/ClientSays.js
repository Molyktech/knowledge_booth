import React, { Component } from 'react'

export default class Client extends Component {
  render() {
    return (
      <div>
      <section id="testimonial-head">
        <div className="container">
            <div className="col-12">
                <h3 className="title"> Client Says</h3>
            </div>
        </div>
    </section>
  <section id="testimonial">
          <div className="container">
              <div className="col-12">
                  <p className="client">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, iure.</p>
              <p>-john</p>
              </div>
          </div>
      </section>
      <div className="newsbar">
      <div className="container">
          <div className="row py-4s">
              <div className="col-xs-6 col-lg-7 newsletter" >
                  <form className="form-inline">
                      <div className="form-group">
                          <label htmlFor="news-email" className="mb-0 text-white">Newsletter</label>
                          
                      </div>
                      <div className=" mx-sm-3 mb-2">
                          <input type="text"  id="news-email" placeholder="Enter email ID" />
                      
                      <button type="submit" className="mb-12 subscribe">Subscribe</button>
                      </div>
                  </form>
              </div>
                  <div className="col-xs-6 col-lg-5 text-right">
                      <div className="rectangle">
                          <img src="images/teach.svg" alt="teacher teaching" className="svg news" />
                          <h4 style={{display: `inline-block`}}>Become a tutor</h4>
                          <p>Join and earn money hassle free.</p>
                      </div>
                  </div>
          </div>
      </div>
  </div>
        
      </div>
    )
  }
}
