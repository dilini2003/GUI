import React from "react";
import {
  FaBook,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaHome,
  FaList,
  FaTags,
  FaStore,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="header_one">
          <a href="\#" className="logo">
            <FaBook />
            Bookly
          </a>
          <form className="search-form">
            <input type="text" id="search-box" placeholder="search here..." />
            <label htmlFor="">
              <FaSearch />
            </label>
          </form>
          <div className="icons">
            <div id="search-btn">
              <FaSearch />
            </div>
            <a href="/#">
              <FaHeart />
            </a>
            <a href="/#">
              <FaShoppingCart />
            </a>
          </div>
        </div>

        <div className="header_two">
          <div className="navbar">
            <a href="#Home">Home</a>
            <a href="#Featured">Featured</a>
            <a href="#Arrivals">Arrivals</a>
            <a href="#Reviews">Reviews</a>
            <a href="#Blogs">Blogs</a>
          </div>
        </div>
      </header>

      <div className="bottom-navbar">
        <a href="/#">
          <FaHome />
        </a>
        <a href="/#">
          <FaList />
        </a>
        <a href="/#">
          <FaTags />
        </a>
        <a href="/#">
          <FaStore />
        </a>
      </div>

    </div>
  );
};

export default Navbar;
