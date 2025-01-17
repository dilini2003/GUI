import React, {useRef} from 'react';
import {FaBook, FaHeart, FaSearch, FaShoppingCart, FaHome, FaList, FaTags, FaStore, FaTimes } from "react-icons/fa";


const Navbar = () =>{
    const navRef = useRef();
    const showNavbar=() =>{
        navRef.current.classList.toggle("login-form");
    };

    return(
        <div>
            <header className='header'>
            <div className='header_one'>
            <a href='\#' className='logo'><FaBook />Bookly</a>
            <form className='search-form'>
                        <input type="text" id='search-box' placeholder='search here...'/>
                        <label htmlFor=""><FaSearch /></label>
            </form>
            <div className="icons">
                <div id="search-btn"><FaSearch /></div>
                <a href='/#' ><FaHeart /></a>
                <a href='/#' ><FaShoppingCart /></a>
            </div>
            </div>
            
            <div className="header_two">
                <div className='navbar'>
                    <a href="#Home">Home</a>
                    <a href="#Featured">Featured</a>
                    <a href="#Arrivals">Arrivals</a>
                    <a href="#Reviews">Reviews</a>
                    <a href="#Blogs">Blogs</a>
                </div>
            </div>
            </header>

            <div className="bottom-navbar">
                <a href="/#"><FaHome /></a>
                <a href="/#"><FaList /></a>
                <a href="/#"><FaTags /></a>
                <a href="/#"><FaStore /></a>
            </div>

            <div className="login-form-container" ref={navRef}>
                <div id="close-login-btn" onClick={showNavbar}><FaTimes /></div>
                <form action='#'>
                    <h3>sign in</h3>
                    <span>email</span>
                    <input type="email" className='box' placeholder='enter your email'/>
                    <span>password</span>
                    <input type="password" className='box' placeholder='enter your password'/>
                    <div className="check-box">
                        <input type="checkbox" id='remember-me'/>
                        <label htmlFor="">remember me</label>
                    </div>
                    <input type="submit" value="sign in" className='btn'/>
                    <p>forgot password?<a href="\#">click here</a></p>
                    <p>don't have an account?<a href="\#">create one</a></p>
                    <p></p>
                </form>
            </div>
        </div>
    )
}

export default Navbar