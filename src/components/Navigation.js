import React from 'react'
import { connect } from 'react-redux';
import TopNav from './TopNav';
import NavAuth from './NavAuth';
import NavNonAuth from './NavNonAuth';
import DashNav from './Dashboard/DashNav';


//import * as routes from '../routes/routes';

const Navigation = ({ authUser}) =>
<div>
  <TopNav />
  {authUser 
    ?  
      <div>
          <NavAuth />
          <DashNav />
       </div>
    : <NavNonAuth />
  }
</div>




  const mapStateToProps = (state) => ({
    authUser : state.sessionState.authUser
  });

export default connect(mapStateToProps)(Navigation);