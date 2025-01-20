import React, { useState, useEffect } from 'react';
import { FaSearch, FaHeart, FaEye, } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay } from 'swiper/modules';
import axios from "axios";

const Featured = () => {
    const [educationalBooks, setEducationalBooks] = useState([]);
  const [fictionBooks, setFictionBooks] = useState([]);
  const [fantasyBooks, setFantasyBooks] = useState([]);
  const [biographyBooks, setBiographyBooks] = useState([]);
    const swiperOptionsTwo ={
        breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
        450:{
            slidesPerView:2,
            spaceBetween:10,
        },
        768:{
            slidesPerView:3,
            spaceBetween:10,
        },
        1024:{
            slidesPerView:4,
        },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:10,
    };
    useEffect(() => {
        axios
          .get("http://localhost:5000/books")
          .then((response) => {
            const books = response.data;
        setEducationalBooks(books.filter((book) => book.category === "Educational Books"));
        setFictionBooks(books.filter((book) => book.category === "Fiction"));
        setFantasyBooks(books.filter((book) => book.category === "Fantasy"));
        setBiographyBooks(books.filter((book) => book.category === "Biography"));
          })
          .catch((error) => {
            console.error("Error fetching books:", error);
          });
      }, []);

      const renderSwiper = (books) => (
        <Swiper
          watchSlidesProgress={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="featured-slider"
          {...swiperOptionsTwo}
        >
         {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src={book.image_url}
                            alt={book.title}/>
                        </div>
                        <div className="content">
                            <h3>{book.title}</h3>
                            <div className="price">Rs.{book.price}<span>Rs.{book.originalprice}</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>  
      );
      
  return (
    <div>
      <section className='featured' id='Featured'>
            <div className="heading"><span>featured books</span></div>
            <div className="swiper">
                <div className='row'>
                {renderSwiper([...educationalBooks, ...fictionBooks])}
                </div>
                <div className='row'>
                {renderSwiper([...fantasyBooks, ...biographyBooks])}
                </div>
            </div>
        </section>

        <section className="newsletter">
            <form action="">
                <h3>Subscribe for latest update</h3>
                <input type="email" placeholder='enter your email' className='box'/>
                <input type="submit" value="subscribe" className='btn'/>
            </form>
        </section>
    </div>
  )
}

export default Featured
