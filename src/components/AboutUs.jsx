import React from 'react'
import { person } from '../data/data'
import { motion } from 'framer-motion'


const AboutUs = () => {
  return (
    <div className='container-fluid about-us'>
      <div className='container'>
        <div className='  about-us-row'>
          <motion.h4
          initial={{ x: -200 ,opacity:0}}
          whileInView={{ x: 0 ,opacity:1}}
          transition={{ duration: 0.8,delay:0.3 }}
          
          >About Us</motion.h4>
          <motion.h1
          initial={{ x: -200 ,opacity:0}}
          whileInView={{ x: 0 ,opacity:1}}
          transition={{ duration: 0.8,delay:0.5 }}
          >Who Are We?</motion.h1>
          <motion.p
          initial={{ x: -200 ,opacity:0}}
          whileInView={{ x: 0 ,opacity:1}}
          transition={{ duration: 0.8,delay:0.5 }}
          >We are a chain of theme restaurant founded in 1971 in London. In 1979, the cafe began covering its walls with rock and roll memorabilia, a tradition which expanded to others in the chain.</motion.p>

          <button>Learn More</button>
        </div>
        <div className='grid-person'>
          {person.map((item,index)=>{
        return<motion.div 
           initial={{ scale:0.2 ,opacity:0}}
           whileInView={{ scale: 1 ,opacity:1}}
           transition={{ duration: 0.3,delay:index*0.3 }}
              
              className='person-item'>
               <img src={item.img} alt="" />
              <div>
               <span>{item.name}</span>
               <p>{item.title}</p>
              </div>
             </motion.div>
          })}

        </div>
      </div>
    </div>
  )
}

export default AboutUs