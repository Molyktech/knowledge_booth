import React, { Component } from 'react';
import { connect} from 'react-redux';
import Teachers from './Teachers';
import Landing from './Landing'
import Cards from './Cards';
import Solution from './Solution';
import Client from './ClientSays';
import Footer from './Footer'; 
import Searchbar from './Searchbar';

// export default class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <Searchbar />
//         <Landing />
//         <Cards />
//         <Teachers />
//         <Solution />
//         <Client />
//         <Footer />
        
//       </div>
//     )
//   }
// }


const HomePage = ({ authUser}) => {
  return (
    <div> 
      {authUser
      ?
      <div>
          <Landing />
         
          <Teachers />
          <Solution />
          <Client />
          <Footer />
        </div>
      :
      <div>
          <Searchbar />
          <Landing />
         
          <Teachers />
          <Solution />
          <Client />
          <Footer />
        </div>

    }
      
    </div>
  )
}
const mapStateToProps = (state) => ({
  authUser : state.sessionState.authUser
});

export default connect(mapStateToProps)(HomePage);



  


