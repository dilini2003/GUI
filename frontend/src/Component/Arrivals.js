import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

const Arrivals = () => {
  const swiperOptionsThree = {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
  };
  return (
    <div>
      <section className="arrivals" id="Arrivals">
        <div className="heading">
          <span>new arrivals</span>
        </div>
        <div className="Swiper">
          <Swiper
            watchSlidesProgress={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="arrivals-slider"
            {...swiperOptionsThree}
          >
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book01.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book02.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book03.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book04.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book05.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <div className="heading1">
          <span>Short Story</span>
        </div>

        <div className="Swiper">
          <Swiper
            watchSlidesProgress={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="arrivals-slider"
            {...swiperOptionsThree}
          >
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book06.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book07.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book08.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book09.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book10.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="heading1">
          <span>Childern books</span>
        </div>

        <div className="Swiper">
          <Swiper
            watchSlidesProgress={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="arrivals-slider"
            {...swiperOptionsThree}
          >
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book06.jfif" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book07.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book08.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book09.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="\#" className="box">
                <div className="image">
                  <img src="images/book10.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>new arrivals</h3>
                  <div className="price">
                    $15.99<span>$20.99</span>
                  </div>
                  <div className="stars">
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStar />
                    </i>
                    <i>
                      <FaStarHalf />
                    </i>
                  </div>
                  <a href="\#" className="btn1">
                    add to cart
                  </a>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% offers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere iure
            accusantium nisi minus ipsum porro.
          </p>
          <a href="#Arrivals" className="btn">
            shop now
          </a>
        </div>
        <div className="image">
          <img src="images/deal.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Arrivals;
