import React from 'react';
import Home from './Home2';
import Featured from '../Featured';
import Arrivals from '../Arrivals';
import Reviews from '../Reviews';
import Blogs from '../Blogs';

const Account = ({ userName }) => {
  return (
    <div>
      <Home/>
      <Featured/>
    <Arrivals/>
    <Reviews/>
    <Blogs/>
    </div>
  );
};

export default Account;
