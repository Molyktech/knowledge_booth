import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items: 2,
};

export default class Teachers extends Component {
  render() {
    return (
      <div>
      
            <div className="container">
                <div className="row">
                    <div className="col-md-8  text-center colorlib-heading animate-box">
                        <h2>Our Experienced Professor</h2>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                    </div>
                </div>
            </div>

           
            <OwlCarousel
                className="owl-theme"
                nav
                margin={20}
                item={options}
                
            >
                    <div className="col-md-3 col-sm-3 animate-box profile">
                        <div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a  href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
                                <div className="desc">
                                    <h3>Brigeth Smith</h3>
                                    <span>Teacher</span>
                                </div>
						</div>
					</div>
				
                    <div className="col-md-3 col-sm-3 animate-box profile">
                        <div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
                                <div className="desc">
                                    <h3>Brigeth Smith</h3>
                                    <span>Teacher</span>
                                </div>
                        </div>  
                    </div>
					<div className="col-md-3 col-sm-3 animate-box profile">
						<div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
                                <div className="desc">
                                    <h3>Brigeth Smith</h3>
                                    <span>Teacher</span>
                                </div>
                        </div>
					</div>
					
					<div className="col-md-3 col-sm-3 animate-box profile">
						<div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
                                <div className="desc">
                                    <h3>Brigeth Smith</h3>
                                    <span>Teacher</span>
							    </div>
						</div>
					</div>
				
            
                    <div className="col-md-3 col-sm-3 animate-box profile">
                        <div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
                            <div className="desc">
                                <h3>Brigeth Smith</h3>
                                <span>Teacher</span>
                            </div>
                        </div>  
                    </div>

                    <div className="col-md-3 col-sm-3 animate-box profile">
						<div className="trainers-entry img-box">
                            <div className="item"><img alt="teacher" src="images/1.jpeg"/></div>
                            <ul className="text-center">
                                <a href=""><li><i className="fa fa-facebook"></i></li></a>
                                <a href=""><li><i className="fa fa-twitter"></i></li></a>
                                <a href=""><li><i className="fa fa-linkedin"></i></li></a>
                            </ul>
							<div className="desc">
								<h3>Brigeth Smith</h3>
								<span>Teacher</span>
							</div>
						</div>
					</div>
            
               
            </OwlCarousel>
        
        </div>         
                 
       
    
    );
  }
}
