import React from 'react'
import cakes from '../assets/img/cakes.png'

const Catering = () => {
  return (
    <div className='container-fluid catering'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 col-lg-12 catering-row'>
                    <h2>Catering</h2>
                    <h1>we Manage Your Events</h1>
                    <p>Allow our Chef to deliver the perfect private dinner or cocktail party experience in your home; or let us simply add a little extra flavor to your next office meeting, boat trip, or beach picnic. By partnering with our sibling location Rosewater Wine & Spirits, we can offer a full array of bar services and beverage selections. Email us to learn more.</p>


                </div>
                
               
            </div>
            <div className='row'>
                <div className='col-lg-12 col-6  catering-row-second'>
                    <div className='col-lg-5 col-sm-12 col-md-12 col-12'>
                        <img src={cakes} alt="" />
                    </div>
                    <div className='col-lg-5 col-12 col-sm-12 col-md-12 text-btn'>
                        <p>we cater in weddings, Corporate Functions and Events</p>
                        <button>HIRE US NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catering