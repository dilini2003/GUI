import React from "react";
import Home from "./Home/Home";
import Featured from "./Featured/Featured";
import Arrivals from "./Arrivals/Arrivals";
import Reviews from "./Review/Reviews";
import Blogs from "./Blogs/Blogs";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Guest = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Featured isLoggedIn={false}/>
      <Arrivals isLoggedIn={false}/>
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Guest;
