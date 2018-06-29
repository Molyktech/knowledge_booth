import React, { Component } from 'react'

let CardStyle ={
    width: '300px',
    borderBottom : 'double #DFDFDF',
   
    
}
let ImgStyle = {
    width : '100%'
}


export default class SessionCards extends Component {

add(ths,sno){
    for (var i=1;i<=5;i++){
    var cur=document.getElementById("star"+i)
        cur.className="fa fa-star"
    }

    for (var i=1;i<=sno;i++){
        // var cur=document.getElementById("star"+i)
    if(cur.className ==="fa fa-star"){
        cur.className="fa fa-star checked"
    }
    }
    
}
  render() {
    return (
      <div>
            <div  className="card" style={CardStyle}>
                <div  className="card-body">
                    <div  className="text-center">
                        <h6  className="card-title text-center"><strong>DISCOVERY OF THE EARTH</strong></h6>
                        <p  className="card-text text-center">9:30 AM</p>
                        <p  className="date">12/03/2018</p>
                    
                        <div  className="profile-pic">
                            <img  className="card-img profile" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=350" 
                            alt="Card" style={ImgStyle}/>
                        </div>
                        <p>By: Jane Solana</p>
                        <div  className="rating">
                                <span  className="fa fa-star" id="star1" onclick="add(this,1)"></span>
                                <span  className="fa fa-star" id="star2" onclick="add(this,2)"></span>
                                <span  className="fa fa-star" id="star3" onclick="add(this,3)"></span>
                                <span  className="fa fa-star" id="star4" onclick="add(this,4)"></span>
                                <span  className="fa fa-star" id="star5" onclick="add(this,5)"></span>

                            </div>
                    </div>
                
                </div>
            </div>
                
        </div>
                
            
    )
  }
}
