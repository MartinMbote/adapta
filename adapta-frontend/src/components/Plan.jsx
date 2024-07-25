import React from 'react'

const Plan = () => {
  return (
    <div className='bg-white w-[32vw] h-[27.8vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1vw] pb-[0.9vw] px-[1.3vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey'>
        <div className='text-adapta-blue-light'>
            <h1 className='underline text-[1.3vw] font-bold mb-[0.7vw]'>
                CLIMATE ADAPTATION PLAN
            </h1>

            <p className='text-[1vw] font-bold'>
                Detailed Credit Report Analysis 
            </p>

            <p className='text-[1vw] font-bold mb-[0.7vw] mt-[-0.3vw]'>
              Your Credit Score is : <span className='text-[1.2vw] text-yellow font-bold'>0%</span>
            </p>

            <div className='text-adapta-blue leading-[1.3vw] text-[1vw]'>
              <p className='mb-[1.2vw]'>
                You have a fair credit score. The below factors are informative and they represent areas which affected your score:
              </p>

              <div className='flex mb-[1vw]'>
                <div>
                  <p className='bg-yellow w-[1.45vw] py-[0.05vw] mr-[1vw] text-white text-center rounded-[1vw]'> 
                    1
                  </p>
                </div>

                <p className='text-[0.9vw] opacity-90'>
                  Temperatures in your region are shooting to 40˚ -  Use a shade net to create conductive environment.
                </p>
              </div>

              <div className='flex mb-[1vw]'>
                <div>
                  <p className='bg-green w-[1.45vw] py-[0.05vw] mr-[1vw] text-white text-center rounded-[1vw]'> 
                    2
                  </p>
                </div>

                <p className='text-[0.9vw] opacity-90'>
                  The soil ph is acidic -  Use a base to neutralize the soil.
                </p>
              </div>

              <div className='flex mb-[1vw]'>
                <div>
                  <p className='bg-red w-[1.45vw] py-[0.05vw] mr-[1vw] text-white text-center rounded-[1vw]'> 
                    3
                  </p>
                </div>

                <p className='text-[0.9vw] opacity-90'>
                  The surface water is drying up quickly in your region -  Look for a way to collect water/reserve.
                </p>
              </div>
            </div>

            <p className='font-bold text-[0.9vw] mb-[0.2vw]'>
              Note:
            </p>

            <p className='text-adapta-blue leading-[1.2vw] text-[1vw]'>
              By acting on the following recommendations your composite credit score will improve.
            </p>
        </div>
    </div>
  )
}

export default Plan