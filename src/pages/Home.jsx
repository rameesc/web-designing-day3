import React, { useContext, useReducer } from 'react'
import {values} from '../data/data'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { cretateUseCondext } from '../context/CreateCondexty'
import Products from './Products'
import HeroSesstion from '../components/HeroSesstion'
import Carousal from '../components/Carousal'
import OrderItems from '../components/OrderItems'
import DeliveryNow from '../components/DeliveryNow'
import Catering from '../components/Catering'
import Gallery from '../components/Gallery'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import YourContact from '../components/YourContact'
import Feedback from '../components/Feedback'
import Footer from '../layout/Footer'


const Home = () => {



  return (
    <div>
    <HeroSesstion/>  
    <Carousal/>  
    <OrderItems/>
    <DeliveryNow/>
    
    <Gallery/>
    <AboutUs/>
    <Contact/>
    <YourContact/>
    <Feedback/>
    <Footer/>
    </div>
  )
}

export default Home