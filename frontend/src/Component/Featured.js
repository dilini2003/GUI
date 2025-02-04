import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay } from 'swiper/modules';
import axios from "axios";

const Featured = ( ) => {
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
            spaceBetween:1,
        },
        768:{
            slidesPerView:3,
            spaceBetween:1,
        },
        1024:{
            slidesPerView:4,
        },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:1,
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

      const addToCart = (bookId) => {
        axios.post('http://localhost:5000/api/cart', { book_id: bookId, quantity: 1 })
          .then(response => alert(response.data.message))
          .catch(error => console.error('Error adding to cart:', error));
      };
      const addToHeart = (bookId) => {
        axios.post('http://localhost:5000/api/heart', { book_id: bookId, quantity: 1 })
          .then(response => alert(response.data.message))
          .catch(error => console.error('Error adding to heart:', error));
      };

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
                            <button onClick={() => addToHeart(book.id)}><FaHeart /></button>
                            <a href="#z"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src={book.image_url}
                            alt={book.title}/>
                        </div>
                        <div className="content">
                            <h3>{book.title}</h3>
                            <div className="price">Rs.{book.price}<span>Rs.{book.originalprice}</span></div>
                            <button onClick={() => addToCart(book.id)} className="btn">add to cart</button>
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
                {renderSwiper([...fantasyBooks, ...biographyBooks])}
                </div>
                <div className='row'>
                {renderSwiper([...educationalBooks, ...fictionBooks])}
                </div>
            </div>
        </section>

        <section className="newsletter">
            <form action="">
                <h3>Subscribe for latest update</h3>
                <input type="email" placeholder='enter your email' className='box'/>
                
                <a href='#n' type="submit" className='btn' >Subscribe</a>
            </form>
        </section>
    </div>
  )
}

export default Featured
