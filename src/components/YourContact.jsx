import React from 'react'

const YourContact = () => {
  return (
    <div className='container-fluid you-contact-conatiner py-5'>
        <div className='container'>
            <div className="row  text-center row-you pb-5">
                <div className="col col-12 col-lg-12 ">
                    <h2>Feeel free to drop us a line!</h2>
                </div>
                <div className='col col-12 col-lg-12 d-flex justify-content-center  '>
                    <p className=''>Let's talk if you have any query or suggestion. We are open to learn from you. So don't hesitate to reach us anytime.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col d-flex gap-2 flex-column col-lg-6 col-12'>
                <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
                <input type="text" class="form-control" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1"/>
                <input type="text" class="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"/>
                <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                    
                </div>
                <div className='col contact-your-second col-lg-6 col-12'>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                 <button>GIVE US A SHOT</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default YourContact