import React, { Component } from 'react'


let ImgStyle = {
    width : '100%'
}

let CardStyle ={
    width: '300px'
}

export default class ProfileCard extends Component {
  render() {
    return (
   
        <div className="profile-card">
            <div className="card dashboard-card" style={CardStyle}>
                <div className="card-body">
                    <h4  className="card-title text-center">Jane Doe</h4>
                    <p  className="text-muted text-center">Degree, University</p>
                    <div className="profile-pic">
                        <img  className="card-img profile" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350" 
                        alt="Card-img" style={ImgStyle} />
                    </div>
                    
                        <div className="container-2 mt-4">
                            <div>
                                <img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' alt="icon"  className="icon" />
                            </div>
                            <div className="icon-text">
                                <a href="mailto:godaddy@ymail.com"  className="card-text">godaddy@ymail.com</a>
                            </div>
                            <div>
                                <img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' alt="icon"  className="icon" />
                            </div>
                            <div className="icon-text">
                                <p  className="card-text">+2347065778890</p>
                            </div>
                            <div>
                                <img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' alt="icon"  className="icon" />
                            </div>
                            <div className="icon-text">
                                <p  className="card-text">23 years</p>
                            </div>
                            <div>
                                <img src='http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png' alt="icon"  className="icon" />
                            </div>
                            <div className="icon-text" >
                                <p  className="card-text">123 35 road bayern saudana crescent lovita estate</p>
                            </div>
                   </div>
                </div>
           </div>
        
      </div>
    )
  }
}
