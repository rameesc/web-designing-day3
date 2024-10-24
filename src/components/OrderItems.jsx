import React, { useState } from 'react'
import { RiCupFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import { FaCakeCandles } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import egg from '../assets/img/egg.png'
import bread from '../assets/img/bread.png'
const OrderItems = () => {
    const [selected,setSelected]=useState('Breakfast')


  return (
    <div className='container-fluid py-5'>
        <div className='container'>
            <div className='items-oredr'>
                <div onClick={()=>setSelected('BreakFast')} className={ `order-1  ${selected=="BreakFast"?"active":""} `}>
                    <RiCupFill/>
                    <span>BreakFast</span>
                </div>
                <div  onClick={()=>setSelected('LUNCH')}  className={ `order-1  ${selected=="LUNCH"?"active":""} `}>
                    <GiForkKnifeSpoon/>
                    <span>LUNCH</span>
                </div>
                <div  onClick={()=>setSelected('Dinner')}  className={ `order-1  ${selected=="Dinner"?"active":""} `}>
                    <MdDinnerDining/>
                    <span>Dinner</span>
                </div>
                <div  onClick={()=>setSelected('Desserts')}  className={ `order-1  ${selected=="Desserts"?"active":""} `}>
                    <FaCakeCandles/>
                    <span>Desserts</span>
                </div>
                <div  onClick={()=>setSelected('Drinks')} className={ `order-1  ${selected=="Drinks"?"active":""} `}>
                    <RiDrinks2Fill/>
                    <span>Drinks</span>
                </div>
            </div>

            <div className='all-menu'>
                <div className='menu-1'>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BOWL</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>EGG SANDWICH</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BURRITO</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    
                </div>
                <div className='menu-1'>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BOWL</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>EGG SANDWICH</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BURRITO</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    
                </div>
                <div className='menu-1'>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BOWL</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>EGG SANDWICH</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    <div className="item-1-of-menu">
                      <div className='item-title'>
                        <h3>BREAKFAST BURRITO</h3>
                        <span>$8.50</span>
                      </div>
                     <p>black bean cake, greens TOMOTO & Avocado PIco drizzled with Lime Cream (Add egg $1)</p>
                    </div>
                    
                </div>

                <div className='egg'>
                    <img src={egg} alt="" />
                </div>
                <div className='bread'>
                    <img src={bread} alt="" />
                </div>

            </div>


        </div>
    </div>
  )
}

export default OrderItems