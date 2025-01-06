import React from "react";
import Navbar from './Navbar';

import { FaPlane, FaLock, FaHeadset, FaSearch, FaHeart, FaEye, FaStar, FaStarHalf } from "react-icons/fa";

import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay} from 'swiper/modules';

const Home = ()=>{
    const swiperOptionsOne={
        breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
        },
        loop:true,
    };
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
    const swiperOptionsThree ={
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
            slidesPerView:3,
        },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:10,
    };

    return(
        <div className='home-container'>
             <Navbar/>

             <section className='home' id='home'>
            <div className="row">
            <div className="content">
                <h3>upto 55% offers</h3>
                <p>Lorem dolor sit amet consectetur adipisicing elit. Quod eum perspiciatis doloremque, placeat voluptatem natus?</p>
                <a href="\#" className='btn'>shop now</a>
            </div>
            <div className="swiper">
                <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                Autoplay={{
                    delay:9500,
                    disableOnInteraction:false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="book-list"
                {...swiperOptionsOne}>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book01.jfif" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book02.jfif" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book03.jfif" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book04.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book05.jfif" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book06.jfif" alt=""/></SwiperSlide>
                    </a>
                </Swiper>
                <img className='stand' src="image/stand.jpg" alt=""/>
            </div>
            </div>
        </section>

        <section className='icons-container'>
            <div className="icons">
                <i><FaPlane /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            <div className="icons">
                <i><FaLock /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            <div className="icons">
                <i><FaHeadset /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>

        </section>
        <section className='featured' id='featured'>
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

        <section className="arrivals" id="arrivals">
            <div className="heading"><span>new arrivals</span></div>
            <div className="Swiper">
                <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="arrivals-slider"
                {...swiperOptionsThree}
                >
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book01.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book02.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book03.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book04.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book05.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </Swiper>
            </div>

            <div className="Swiper">
                <Swiper
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="arrivals-slider"
                {...swiperOptionsThree}
                >
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book06.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book07.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book08.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book09.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className="box">
                        <div className="image">
                            <img src="images/book10.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="price">$15.99<span>$20.99</span></div>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </Swiper>
            </div>
        </section>
        </div>
    )
}

export default Home