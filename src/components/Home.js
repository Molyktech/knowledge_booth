import React, { Component } from 'react';
import Teachers from './Teachers';
import Landing from './Landing'
import Cards from './Cards';
import Solution from './Solution';
import Client from './ClientSays';
import Footer from './Footer'; 
import Searchbar from './Searchbar';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Landing />
        <Cards />
        <Teachers />
        <Solution />
        <Client />
        <Footer />
        
      </div>
    )
  }
}


  


