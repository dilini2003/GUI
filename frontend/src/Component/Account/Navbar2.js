import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaHome,
  FaTags,
  FaStore,
  FaReadme,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="header_one">
          <Link className="logo">
            <FaBook />
            Bookly
          </Link>
          <form className="search-form">
            <input type="text" id="search-box" placeholder="search here..." />
            <label htmlFor="">
              <FaSearch />
            </label>
          </form>
          <div className="icons">
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
        <a href="#Home">
          <FaHome />
        </a>
        <a href="#Featured">
        <FaReadme/>
        </a>
        <a href="#Arrivals">
        <FaBook />
        </a>
        <a href="#Reviews">
          <FaTags />
        </a>
        <a href="#Blogs">
        <FaStore/>
        </a>
      </div>

    </div>
  );
};

export default Navbar;
