import React from 'react'
import { slider } from '../data/data'
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { motion } from 'framer-motion';

const Carousal = () => {

  const swiper=useSwiper()
  return (
    <div className='container-fluid carousal-container' >
        <div className='container'>
            <div className='title-carousal'>
                <motion.h5
                 initial={{ y: 20 ,opacity:0}}
                 whileInView={{ y: 0 ,opacity:1}}
                 transition={{ duration: 0.3,delay:0.3 }}
                
                >Menu</motion.h5>
                <motion.h1
                initial={{ y: 20 ,opacity:0}}
                whileInView={{ y: 0 ,opacity:1}}
                transition={{ duration: 0.2,delay:0.5 }}
               
                >Taste Our Foods & Enjoy</motion.h1>

            </div>
            <Swiper
                 navigation={true}
                 
               modules={[Navigation, Pagination]}
                
                  spaceBetween={10}
                  // className='mySwiper'
                  slidesPerView={4}
                  pagination={{ clickable: true}}
                
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    0:{
                      slidesPerView:1,
                      spaceBetween:10,

                    },
                    600:{
                        slidesPerView:2,
                        spaceBetween:10,
                    },
                    800:{
                        slidesPerView:3,
                        spaceBetween:10,
                    },
                    1500:{
                        slidesPerView:4,
                        spaceBetween:10,
                    },
                  }}
                  
                   
                   
               >
              {slider.map((item,index)=>{
                return <SwiperSlide className='carousal-child' key={index}>
                    <img src={item.img} alt="" />
                    <div className='some-description'>
                      <h3>speicy chiken noodiels</h3>
                      <h4>noodiels</h4>
                    </div>
                </SwiperSlide>
              })}
            </Swiper>
        </div>
    </div>
  )
}

export default Carousal