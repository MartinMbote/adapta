import React from 'react'
import { piechartbg, pieballimg } from '../assets'

const Compositescore = () => {
  return (
    <div>
        <div className='bg-white w-[15.5vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1.3vw] h-[27.8vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey mx-[1vw] flex justify-center'>
            <div>
                <p className='border bg-adapta-blue-light text-white px-[2vw] py-[0.2vw] rounded-[0.8vw] text-[0.9vw] mb-[1vw]'>
                    Composite Score
                </p>

                <div>
                    <img src={piechartbg} className='w-[11vw]' />
                </div>

                <p className='text-center mt-[1vw] font-bold text-[0.9vw]'>
                    Key Metrics
                </p>
            </div>
        </div>
    </div>
  )
}

export default Compositescore