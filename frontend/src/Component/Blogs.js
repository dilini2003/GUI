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
                        <div className="box">
                            <img src="images/blog01.jfif" alt=""/>
                        
                        <div className="content">
                            <h3>Books as Traveling Companions</h3>
                            <p>
                            It's holiday season, and for a lot of us, that means travel. For goodness sake, don't buy a book at an airport unless it is a true emergency. Be prepared. Buy your travel books used. You want them entertaining enough to distract you from the hassles of getting to your destination, and you also want them lightweight and disposable so that you can leave them behind if you need more room in your luggage.
                          </p>
                          <a href="\#" className="button">read more</a>
                          </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <img src="images/blog02.jpg" alt=""/>
                        
                        <div className="content">
                            <h3>The Haunted Bookshop</h3>
                            <p>
                            Maddie arrived one morning to find an astrology book wide open on the floor in front of Biography.  She knew it hadn't been there when she closed the night before.I once stood at the counter and witnessed a historical romance (involving men in kilts, if you must know) come straight off the shelf by a good two inches and then plummet to the floor.
                            </p>
                            <a href="\#" className="button">read more</a>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <img src="images/blog03.jfif" alt=""/>
                     
                        <div className="content">
                            <h3>The Warmth of Children's Classics</h3>
                            <p>
                            It's the dark time of year, and you know what that means: going to bed early to read!  Like many of you, I have a pile of books on my bedside table, and I read more than one at a time.  Before bed, I like witty fiction and fascinating science or history.  And now until at least Groundhog Day, I'm ending each night's reading session with an excerpt from my favorite children's stories.
                            </p>
                            <a href="\#" className="button">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <img src="images/blog04.jpg" alt=""/>
                       
                        <div className="content">
                            <h3>Books to Read when You're Heartbroken</h3>
                            <p>
                            Every time February comes around, all the red, pink, and white Valentine's Day gifts are thrown into the front lines, promise love and romance, and we, the heartbroken and lonely, can only turn our heads, wipe away the tear that falls unexpectedly, and hope no one notices our dire state.There's hope, however, for in the midst of all candy hearts and monogrammed sweets, there are books, countless books, that will have our backs.
                            </p>
                            <a href="\#" className="button">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box">
                            <img src="images/blog05.jpg" alt=""/>
                        
                        <div className="content">
                            <h3>The Bookstore Shuffle</h3>
                            <p>
                            Books for taller people have been moved downstairs.  Biography, History, Science, Reference, and Foreign Language are now downstairs in the back corner where Kids used to be. Young Adult has moved into the main room where Horror was.  Horror is where Kids Beginning Chapter Books were.  You get the idea.  Moving the sections felt like that game Traffic Jam where you have to figure out which car to move when and where in order to get another into its space and eventually free the car clog.Sections may not be perfectly alphabetized, but things are generally in the right place. We're getting there!    So come on in and get reacquainted with the layout. Saturday, November 25 is Small Business Saturday, and we are running a Buy 3 Get 1 Free special. Your friendly booksellers are always ready to help you find your next read, wherever it is.
                            </p>
                            <a href="\#" className="button">read more</a>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Blogs
