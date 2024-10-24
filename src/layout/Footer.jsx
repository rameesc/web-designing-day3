import React from 'react'
import logo from '../assets/img/logo.png'
import noodiels from '../assets/img/pngfood2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='container-fluid footer-container'>
         <img className='nooodies' src={noodiels} alt="" />
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-4 left-footer'>
                   
                    <img src={logo} alt="" />
                    <h1>Want To Taste Our Food?</h1>
                    <button>ORDER ONLINE</button>
                </div>
                <div className='col-12 col-lg-6 footer-second'>
                    <div className='col footer-right'>
                        <h2>ABOUT</h2>
                        <ol>
                            <li>ABOUT</li>
                            <li>Services</li>
                            <li>Careers</li>
                            <li>Hire Us</li>
                        </ol>
                    </div>
                    <div className='col footer-right'>
                        <h2>RESOURCES</h2>
                        <ol>
                            <li>TERMS</li>
                            <li>HELP</li>
                            <li>privacy</li>
                          
                        </ol>
                        <div className='icon'>
                            <span><FaFacebookF/></span>
                            <span><FaInstagram/></span>
                            <span><FaFacebookF/></span>
                            <span><FaInstagram/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer