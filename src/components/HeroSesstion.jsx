import React, { useState } from 'react'
import egg from '../assets/img/plate.png'
import { motion } from 'framer-motion'

const variants={
  open:{opacity:1,x:0},
  closed:{opacity:0,x:"-100%"}
}


const HeroSesstion = () => {

  const [isOpen,setIsopen]=useState(false)
  return (
    <div className='container-fluid px-0'>
      <div className='hero-session'>
        <motion.img
           initial={{ x: -200 }}
           whileInView={{ x: 0 }}
           transition={{ duration: 0.8 }}
          //  viewport={{ once: true }}
       
          src={egg} alt="" />

        <motion.div
        initial={{ y: 200 ,opacity:0}}
        whileInView={{ y: 0 ,opacity:1}}
        transition={{ duration: 0.8 }}
        
        className='rigth-container'>
          <h2>The Spectacle <strong>Before Us <br />
          Was Indeed</strong>sublime</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis sunt illo, cumque, temporibus ducimus quae eos at nobis est aperiam iste expedita incidunt reprehenderit, voluptatibus quia unde nesciunt deleniti suscipit quis ipsa nisi exercitationem. Labore aspernatur itaque reiciendis perferendis.</p>

          <div className='btn-bero'>
            <button onClick={()=>setIsopen(!isOpen)} className='order'>ORDER ONLINE</button>
            <button className='oru-location'>ORU LOCATION</button>
          </div>
        </motion.div>
        
      </div>

    </div>
  )
}

export default HeroSesstion