import React, { useState, useEffect } from "react";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const swiperOptionsOne = {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        const filteredBooks = response.data.filter((book) => book.id < 8);
        setBooks(filteredBooks);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <section className="home" id="Home">
        <div className="row">
          <div className="content">
            <h3>Welcome Bookly!</h3>
            <p>
            Explore a wide collection of books across various genres, from fiction to self-help. Discover your next great read and enjoy a seamless shopping experience with us. Happy reading!
            </p>
            <a href="#Arrivals" className="btn">
              shop now
            </a>
          </div>
          <div className="swiper">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={3}
              Autoplay={{
                delay: 9500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="book-list"
              {...swiperOptionsOne}
            >
              {books.map((book) => (
                
                <SwiperSlide key={book.id} className="swiper-slide">
                  <img
                    src={book.image_url}
                    alt={book.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="icons-container">
        <div className="icons">
          <i>
            <FaShippingFast />
          </i>
          <div className="content">
            <h3>over payment</h3>
            <p>over payment Rs.250</p>
          </div>
        </div>
        <div className="icons">
          <i>
            <FaLock />
          </i>
          <div className="content">
            <h3>Secure Payment</h3>
            <p>100% Secure Payment</p>
          </div>
        </div>
        <div className="icons">
          <i>
            <FaHeadset />
          </i>
          <div className="content">
            <h3>24/7 Support</h3>
            <p>Call Us Anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
