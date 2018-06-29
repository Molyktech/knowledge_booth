import React, { Component } from 'react'
import FooterHead from './FooterHead';
import Teachers from './Teachers';

const testimonialProfile = {
    backgroundColor: 'rgba(77,5,51, .2)',
}
const testimonialName = {
    color : 'green'
}
const container = {
    height : '80px'
}
export default class Client extends Component {
  render() {
    return (
      <div>
      <section id="testimonial-head">
        <div className="container">
            <div className="col-12 prof-header">
                <h2 className="title"> Client Says</h2>
            </div> 
        </div>
    </section>
  <section id="testimonial">
        <div class="container">
                <div class="row">
                    <div class="col-md-12 mx-auto">
                        <div class="quote"><i class="fa fa-quote-left fa-4x"></i></div>
                    </div>
          
                    <div class="item mx-auto">
                        <div class="profile-circle" style={testimonialProfile}></div>
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum 
                            laudantium totam tempore optio doloremque laboriosam qua animis.</p>
                            <h5 style={testimonialName}><span class="ion-minus"></span> -John <span class="ion-minus"></span></h5>
                            

                       
                        </blockquote>	
                    </div>
                </div>
          </div>
      </section>
     <div className="newsbar">
      <div className="container" style={container}>
      <FooterHead />
      </div>
    </div>
        
      </div>
    )
  }
}
