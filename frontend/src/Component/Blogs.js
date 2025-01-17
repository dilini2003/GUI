import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay,} from 'swiper/modules';

const Blogs = () => {
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
  return (
    <div>
      <section className="blogs" id='Blogs'>
            <h1 className='heading'><span>our blogs</span></h1>
            <div className="swiper">
            <Swiper 
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay]} className="blogs-slider"
                {...swiperOptionsThree} >
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/blog01.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>blog goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className="btn">read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/blog02.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>blog goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className="btn">read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/blog03.jfif" alt=""/>
                        </div>
                        <div className="content">
                            <h3>blog goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className="btn">read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/blog04.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>blog goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className="btn">read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/blog05.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>blog goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className="btn">read more</a>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Blogs
