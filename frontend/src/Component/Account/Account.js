import React from 'react';
import Featured from '../Featured';
import Arrivals from '../Arrivals';
import Reviews from '../Reviews';
import Blogs from '../Blogs';
import Navbar from './Navbar2';
import Home from '../Home';
import Footer from '../Footer';

const Account = ({ userName }) => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featured/>
    <Arrivals/>
    <Reviews/>
    <Blogs/>
    <Footer/>
    </div>
  );
};

export default Account;
