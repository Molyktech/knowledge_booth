import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
            <footer className="footer">

                
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
            
            
            

            <div className="container pt-5 pb-2 footer-body">
                <div className="row">

                            <div className="col-md-5 col-lg-4 col-xl-4 helpful-links ">
                                <div id="link-one">
                                    <h6>HELP FULL LINKS</h6>
                                    
                                    <p><a href="" className="">About Us</a></p>
                                    <p><a href="" className="">Contact Us</a></p>
                                    <p><a href="" className="">Whiteboard</a></p>
                                    <p><a href="" className="">Help & Support</a></p>
                                    <p><a href="">Mobile Payment</a></p>
                                </div>
                                <div id="link-two">
                                        <p><a href="">Exam Courses</a></p>
                                        <p><a href="">Online Tutoring</a></p>
                                        <p><a href="">Test Preparation</a></p>
                                        <p><a href="">Site Map</a></p>
                                        <p><a href="">FAQ's</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-4 col-xl-4">
                                <h6>RECENT BLOGS</h6>
                                
                                <p>
                                    <strong>Lorem ipsum dolor sit amet.</strong>
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint aliquid inventore 
                                    praesentium omnis dolorum ratione iure nulla dignissimos labore.
                                </p>
                                <p>
                                    <strong>Lorem ipsum dolor sit amet.</strong>
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint aliquid inventore 
                                    praesentium omnis dolorum ratione iure nulla dignissimos labore.
                                </p>

                            </div>

                

                            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto">
                                <h6 className="d-flex justify-content-end">HAVE A QUESTION?</h6>
                                
                                <p className="d-flex justify-content-end">call us 24/7</p>
                                <h2 className="d-flex justify-content-end" > + 91-5897458922</h2>
                                <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-100" />
                            </div>

                </div>
            </div>


            <hr className="bg-white mx-4 mt-2 mb-1" />

           
            <div className="container-fluid bottom-footer">
                <p className="text-center m-0 py-1">
                    © 2017 Copyright <a href="" className="text-white">Knowledge-Booth</a>
                </p>
            </div>
           

        </footer>
                
      </div>
    )
  }
}
