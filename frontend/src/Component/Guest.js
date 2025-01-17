import React from "react";
import Home from "./Home";
import Featured from "./Featured";
import Arrivals from "./Arrivals";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Guest = () => {
  return (
    <div>
      <Home />
      <Featured />
      <Arrivals />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Guest;
