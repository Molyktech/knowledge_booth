import React, { Component } from 'react'
import ProfileCard from './ProfileCard';
import Footer from '../Footer';

export default class Watchlist extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <ProfileCard />
                </div>
                <div className="col-md-8">

                        <table class="table table-hover table-responsive">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Degree</th>
                                <th scope="col">University</th>
                                <th scope="col">Major Subject</th>
                                <th scope="col">Grades</th>
                                <th scope="col">Graduating Year</th>
                                <th scope="col"></th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>Agricultural Science</td>
                                <td>University of Cape Town</td>
                                <td>Models, Business Economics, Financial Mathematics</td>
                                <td>First</td>
                                <td>1981</td>
                                <td><a>Upload Certificate</a></td>
                            </tr>
                            <tr>
                                <td>Agricultural Science</td>
                                <td>University of Cape Town</td>
                                <td>Models, Business Economics, Financial Mathematics</td>
                                <td>First</td>
                                <td>1981</td>
                                <td><a>Upload Certificate</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    

                    </table>

                    <div class="row">
                        <div class="col-md-5">
                            <h4 class="session-title">Teaching Subjects</h4>
                            <p> Agricultural Science, Business Economics, Finance and Financial Reporting, Probability and Mathematical Statistics, English,Models, Biology</p>
                            <p><a href="">Add Subject</a></p>
                        </div>
                        <div class="col-md-4">
                            <h4 class="session-title">Demo Video</h4>
                            <video src="" />

                        </div>
                        <div class="col-md-3">
                            <h4 class="session-title">Time Availability</h4>
                            <p class="text text-muted">Not Available</p>
                            <p><a class="" href="">ADD NEW</a></p>

                        </div>
                    <div> 
                    <div class="container">
                        <div class="text-center rate-button">
                            <p class="text-muted">Hourly Rate</p>
                            <h3>$25.00/hrs</h3>
                        </div>
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
