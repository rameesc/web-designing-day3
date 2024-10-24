import React from 'react'
import { FaMap } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import green from '../assets/img/green.png'
import soup from '../assets/img/kissi.png'
const Contact = () => {
  return (
    <div className='container-fluid contact-container'>

        <div className='green'>
            <img src={green} alt="" />
        </div>
        <div className='container'>
            <div className='title'>
                <h3>Location & Timing</h3>
                <h1>Contact width us</h1>
            </div>
            <div className='row-cols-3 d-flex flex-wrap flex-sm-wrap flex-lg-nowrap flex-md-wrap gap-5 py-5 row-cols-lg-3'>
                <div className='col-12 col-lg-4 contact-item'>
                  <div className='item-co item-one'>
                    <span><FaMap/></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi!</p>
                  </div>
                  <div className='item-co'>
                    <span><IoCall/></span>
                    <p>+511 442-2777</p>
                  </div>
                  <div className='item-co'>
                    <span><IoMdMail/></span>
                    <p>mail@gmail.com</p>
                  </div>
                </div>
                <div className='col col-12 col-lg-4 contact-item item-two'>
                    <h4>Hours of service</h4>
                    <h3>Monday to Saturday</h3>
                    <p>1:00 pm - 3:00 pm and</p>
                    <p>7:00 pm - 11:00 pm</p>
                    <h3>Sunday</h3>
                    12:00 pm - 3:30 pm
                </div>
                <div className='col col-12 col-lg-4 contact-item item-three'>
                    <h3>Telephone support:</h3>
                    <p>Monday to Saturday from 9:00 am to 9:00 pm</p>
                    <button>MAKE A RESERVATION</button>
                    <img src={soup} alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact