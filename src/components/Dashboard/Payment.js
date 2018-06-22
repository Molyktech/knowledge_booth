import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import Footer from '../Footer';

const IconStyle = {
    width: '30px',
    height: '30px'
}

export default class Payment extends Component {
  render() {
    return (
      <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ProfileCard />
                    </div>
                    <div className="col-9">
                        <div  className="">
                            <h3  className="session-title">MY PAYMENT</h3> 
                         </div>
                        <table className="table table-hover table-responsive table-payment"  border='0'>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Assignment/Session</th>
                                    <th scope="col">Title for Payment</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a className="" href="">MATHEMATICS</a></td>
                                    <td>Lorem ipsum dolor</td>
                                    <td>20/15/2018</td>
                                    <td>$25.00</td>
                                    <td><img src="/images/verified.svg" alt="verified" style={IconStyle} /></td>
                                </tr>
                                <tr>
                                    <td><a className="" href="">ENGLISH</a></td>
                                    <td>Lorem ipsum dolor</td>
                                    <td>20/15/2018</td>
                                    <td>$25.00</td>
                                    <td><img src="/images/right-arrow1.svg" alt="verified" style={IconStyle} /></td>
                                </tr>
                                <tr>
                                    <td><a className="" href="">FRENCH</a></td>
                                    <td>Lorem ipsum dolor</td>
                                    <td>20/15/2018</td>
                                    <td>$25.00</td>
                                    <td><img src="/images/verified.svg" alt="verified" style={IconStyle}/></td>
                                </tr>
                                <tr>
                                    <td><a className="" href="">AGRICULTURAL SCIENCE</a></td>
                                    <td>Lorem ipsum dolor</td>
                                    <td>20/15/2018</td>
                                    <td>$25.00</td>
                                    <td><img src="/images/right-arrow.svg" alt="verified" style={IconStyle} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
          
      </div>
     
      
    )
  }
}
