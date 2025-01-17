import React from "react";
import Navbar from './Navbar';

import { FaShippingFast, FaLock, FaHeadset  } from "react-icons/fa";

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
    
    return(
        <div className='home-container'>
             <Navbar/>

             <section className='home' id='Home'>
            <div className="row">
            <div className="content">
                <h3>upto 55% offers</h3>
                <p>Lorem dolor sit amet consectetur adipisicing elit. Quod eum perspiciatis doloremque, placeat voluptatem natus?</p>
                <a href="#Arrivals" className='btn'>shop now</a>
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
                <i><FaShippingFast /></i>
                <div className="content">
                    <h3>over payment</h3>
                    <p>over payment $100</p>
                </div>
            </div>
            <div className="icons">
                <i><FaLock /></i>
                <div className="content">
                    <h3>Secure Payment</h3>
                    <p>100% Secure Payment</p>
                </div>
            </div>
            <div className="icons">
                <i><FaHeadset /></i>
                <div className="content">
                    <h3>24/7 Support</h3>
                    <p>Call Us Anytime</p>
                </div>
            </div>

        </section>
        </div>
    )
}

export default Home