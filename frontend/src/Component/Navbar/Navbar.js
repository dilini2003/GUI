import React from "react";
import './Navbar.css';
import {
  FaBook,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHome,
  FaTags,
  FaStore,
  FaReadme,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login"); // Navigate to the Login page
  };


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
            <a onClick={handleLogin} id='heart' className="user-btn">
              <FaHeart />
            </a>
            <a onClick={handleLogin} id="cart" className="user-btn">
              <FaShoppingCart />
            </a>
            <div id="login-btn" className="user-btn" onClick={handleLogin}>
              <FaUser />
            </div>
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
          <FaStore />
        </a>
      </div>

    </div>
  );
};

export default Navbar;
