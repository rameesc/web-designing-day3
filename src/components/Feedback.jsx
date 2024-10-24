import React from 'react'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import pizza from '../assets/img/pizza2.png'
const Feedback = () => {
  return (
    <div className='container-fluid feedback-container py-5'>

        <div className='pizza'>
            <img src={pizza} alt="" />
        </div>
        <div className='container'>
            <div className='slider-conainer'>
                <Swiper
                   navigation={true}
                 
                    modules={[Navigation]}
                   
                     spaceBetween={10}
                     className='mySwiper'
                     slidesPerView={1}
                     pagination={{ clickable: true}}
                
                >

                    <SwiperSlide className='slider-item'>
                        <span><FaQuoteLeft/></span>
                        <div className='stars'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi, debitis id possimus corporis at odio incidunt blanditiis aspernatur corrupti!</p>
                        <h3>Noah kingos</h3>

                    </SwiperSlide>
                    <SwiperSlide className='slider-item'>
                        <span><FaQuoteLeft/></span>
                        <div className='stars'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi, debitis id possimus corporis at odio incidunt blanditiis aspernatur corrupti!</p>
                        <h3>Noah kingos</h3>

                    </SwiperSlide>
                    <SwiperSlide className='slider-item'>
                        <span><FaQuoteLeft/></span>
                        <div className='stars'>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi, debitis id possimus corporis at odio incidunt blanditiis aspernatur corrupti!</p>
                        <h3>Noah kingos</h3>

                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    </div>
  )
}

export default Feedback