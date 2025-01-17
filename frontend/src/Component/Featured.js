import React from 'react';
import { FaSearch, FaHeart, FaEye, } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay } from 'swiper/modules';

const Featured = () => {
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
  return (
    <div>
      <section className='featured' id='Featured'>
            <div className="heading"><span>featured books</span></div>
            <div className="swiper">
                <Swiper 
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay]} className="featured-slider"
                {...swiperOptionsTwo} >
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book01.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book02.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book03.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book04.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book05.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book06.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book07.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book08.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book09.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                        <div className="icons">
                            <a href="\#"><FaSearch /></a>
                            <a href="\#"><FaHeart /></a>
                            <a href="\#"><FaEye /></a>
                        </div>
                        <div className="image">
                            <img src="images/book10.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>featured book</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <a href='\#' className="btn">add to cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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
