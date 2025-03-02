import React from 'react';
import Featured from './Featured/Featured';
import Arrivals from './Arrivals/Arrivals';
import Reviews from './Review/Reviews';
import Blogs from './Blogs/Blogs';
import Navbar from './Navbar/Navbar2';
import Home from './Home/Home';
import Footer from './Footer/Footer';

const Account = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featured isLoggedIn={true}/>
    <Arrivals isLoggedIn={true}/>
    <Reviews/>
    <Blogs/>
    <Footer/>
    </div>
  );
};

export default Account;
