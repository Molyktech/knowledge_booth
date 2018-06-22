import React, { Component } from 'react'
import ProfileCard from './ProfileCard';
import SessionCards from './SessionCards';
import Footer from '../Footer';


import '../App.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div  className="container">
            <div  className="row">
                <div  className="col-md-3">
                    <ProfileCard />
                </div>
            
        
                <div  className="col-md-9">
                    <div  className="">
                        <h3  className="session-title">UPCOMING SESSION</h3> 
                    </div>
                    <div  className="container p-2 ">
                        <div  className="row">                
                            <div  className="col-md-4">
                                <SessionCards />
                            </div>
                            <div  className="col-md-4">
                                <SessionCards />
                            </div>
                            <div  className="col-md-4">
                                <SessionCards />
                            </div>
                            </div>
                        </div>
                        <div  className="">
                            <h3  className="session-title">PREVIOUS SESSION</h3> 
                        </div>
                        <div  className="container p-2 mt-4">
                            <div  className="row">
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                            </div>
                        </div>
                        <div  className="container p-2 mt-4">
                            <div  className="row">
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                                <div  className="col-md-4 ">
                                    <SessionCards />
                                </div>
                            </div>
                        </div>

                </div>
            </div>
          
        </div>
        <Footer />
      </div>
    )
  }
}
