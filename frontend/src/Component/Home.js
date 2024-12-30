import React from "react";
import Navbar from './Navbar';

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
                    <SwiperSlide><img src="images/book1.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book2.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book3.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book4.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book5.jpg" alt=""/></SwiperSlide>
                    </a>
                    <a href="\#" className='swiper-slide'>
                    <SwiperSlide><img src="images/book6.jpg" alt=""/></SwiperSlide>
                    </a>
                </Swiper>
                <img className='stand' src="image/stand.jpg" alt=""/>
            </div>
            </div>
        </section>

        </div>
    )
}

export default Home