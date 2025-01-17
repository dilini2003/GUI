import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Autoplay,} from 'swiper/modules';

const Reviews = () => {
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
      <section className="reviews" id='Reviews'>
            <h1 className='heading'><span>clint's reviews</span></h1>
            <div className="swiper">
            <Swiper 
                watchSlidesProgress={true}
                autoplay={{
                    delay:3500,
                    disableOnInteraction:false
                }}
                modules={[Autoplay]} className="reviews-slider"
                {...swiperOptionsThree} >
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic01.jfif" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic02.jfif" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic03.jpg" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic04.jpg" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic05.jpg" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic06.jpg" alt=""/>
                            <h3>Anna Safra</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure quibusdam delectus doloribus?</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Reviews
