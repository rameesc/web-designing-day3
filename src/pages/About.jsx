import React, { useContext, useMemo, useState } from 'react'
import { cretateUseCondext } from '../context/CreateCondexty'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
const About = () => {
  const [counter,setCounter]=useState(0)
  
  
 
  return (
    <div className='container-fluid' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-12'>
            <h1>kk</h1>
          </div>
          <div className='col-lg-2 col-12'>
            <h1>kk</h1>
          </div>
          <div className='col-lg-2 col-12'>
            <h1>kk</h1>
          </div>
          <div className='col-lg-2 col-12'>
            <h1>kk</h1>
          </div>
        </div>
      </div>
      <div className='container'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
     <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
     </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       


      </div>
     
     </div>
  )
}

export default About

