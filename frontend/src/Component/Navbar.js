import React, { useState, useEffect } from "react";
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
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login"); // Navigate to the Login page
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cart")
      .then((response) => {
        // Calculate total number of items in the cart
        const totalItems = response.data.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalItems);
      })
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/heart")
      .then((response) => {
        // Calculate total number of items in the cart
        const totalItem = response.data.reduce((acc, item) => acc + item.quantity, 0);
        setHeartCount(totalItem);
      })
      .catch((error) => console.error("Error fetching heart items:", error));
  }, []);

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
            <Link to="/heart" id='heart' className="user-btn">
              <FaHeart />
              {heartCount > 0 && <span className="heart-count">{heartCount}</span>}
            </Link>
            <Link to="/cart" id="cart" className="user-btn">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
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
