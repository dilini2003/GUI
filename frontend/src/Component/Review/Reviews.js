import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Review.css';
import {Autoplay,} from 'swiper/modules';

const Reviews = () => {
    const swiperOptionsThree ={
        breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:20,
        },
        450:{
            slidesPerView:2,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:20,
        },
        1024:{
            slidesPerView:3,
        },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:20,
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
    centeredSlides={false}loop={false}
                modules={[Autoplay]} className="reviews-slider"
                {...swiperOptionsThree} >
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic01.jfif" alt=""/>
                            <h3>Lily Rose</h3>
                            <p>Received the books in perfect condition. I truly appreciate the extra care, it's 
                                rare to find stores that take the time to wrap books in bubble wrap. Also, they 
                                included bookmarks for each book. Thank you for such an excellent and considerate service!</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic02.jfif" alt=""/>
                            <h3>Sophia Jane</h3>
                            <p>Excellent service. Highly recommended as they are responsive and delivered the book on the promised date in the perfect condition.</p>
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
                            <h3>Henry William</h3>
                            <p>A great selection of books at very reasonable prices. Super quick delivery too! Highly recommend.</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic04.jpg" alt=""/>
                            <h3>Ethan Michael</h3>
                            <p>They have rare books which we cant find at local bookshops. We can order online and delivery was quick..definitely reccomend this store for international best selling books.</p>
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
                            <h3>Ava Marie</h3>
                            <p>Made online purchase shipped on time , Beautiful packaging Delivered with Nice Book tag Recommended for Bookaholics</p>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide box">
                            <img src="images/pic06.jpg" alt=""/>
                            <h3>James Oliver</h3>
                            <p>I love this website and the quality products they deliver on time</p>
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
