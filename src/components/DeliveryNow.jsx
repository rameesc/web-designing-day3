import React from 'react'
import freanch from '../assets/img/freanch.png'
import { motion } from 'framer-motion'

const DeliveryNow = () => {
  return (
    <div className='container-fluid freanch'>
        <div className='home-delivery'>
            <h4>Hungry?</h4>
            <h2>we will home deliver !</h2>
            <button>MAKE AN ORDER</button>
        </div>
        <motion.div
        initial={{ y: 200 ,opacity:0}}
        whileInView={{ y: 0 ,opacity:1}}
        transition={{ duration: 1 }}
        className='freanch-chiken'>
            <img src={freanch} alt="" />
        </motion.div>
    </div>
  )
}

export default DeliveryNow