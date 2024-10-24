import React from 'react'
import { galleryImg } from '../data/data'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <div className='container-fluid '>
        <div className='container'>

            <div className='gallerys'>
                {galleryImg.map((items,index)=>{
                    return <motion.div 
                    initial={{ y: 200 ,opacity:0}}
                    whileInView={{ y: 0 ,opacity:1}}
                    transition={{ duration: 1,delay:index*0.2 }}
                            
                    key={index} className='gallery-item'>
                        <img src={items.img} alt="" />
                    </motion.div>
                })}
            </div>

        </div>
    </div>
  )
}

export default Gallery