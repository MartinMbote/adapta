import React from 'react'
import { piechartbg, pieballimg } from '../assets'

const Resultscards = () => {
  return (
    <div>
        <div className='bg-white w-[32vw] text-adapta-blue font-semibold text-[0.8vw] py-[1.3vw] pl-[1.5vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey flex gap-[2vw]'>            
            <div className='flex'>
                <img src={piechartbg} className='w-[8.5vw]' />
                <img src={pieballimg} className='w-[8.5vw] absolute' style={{ transform: 'rotate(-144deg)' }} />
                <div className='absolute mt-[2.7vw] ml-[3.3vw] text-[2vw] font-semibold text-center'>
                    <p>
                        0%
                    </p>                    
                </div>
            </div>

            <div>
                <div className='flex'>
                    <div>
                        <p className='text-[1.2vw] mt-[0.3vw] font-semibold text-grey'>
                            Impact
                        </p>

                        <p className='text-adapta-blue text-[1.3vw] font-bold'>
                            High Risk
                        </p>
                    </div>

                    <div className='border-[0.15vw] ml-[10vw] w-[8vw] h-[1.8vw] rounded-[1vw] text-center text-[0.9vw] border-yellow-light absolute mt-[0.9vw] pt-[0.1vw]'>
                        <p>
                            Climate Score
                        </p>
                    </div>                
                </div>

                <div className='mt-[1vw] flex gap-[0.9vw]'>
                    <div className='flex gap-[0.5vw]'>
                        <div className='w-[0.5vw] h-[0.5vw] bg-red rounded-[1vw]'></div>

                        <div>
                            <p className='mt-[-0.4vw] text-[0.8vw]'>
                                0% - 25%
                            </p>

                            <p className='text-[0.8vw] mt-[-0.1vw] font-bold'>
                                High Risk
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-[0.5vw]'>
                        <div className='w-[0.5vw] h-[0.5vw] bg-yellow rounded-[1vw]'></div>

                        <div>
                            <p className='mt-[-0.4vw] text-[0.8vw]'>
                                25% - 75%
                            </p>

                            <p className='text-[0.8vw] mt-[-0.1vw] font-bold'>
                                Medium Risk
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-[0.5vw]'>
                        <div className='w-[0.5vw] h-[0.5vw] bg-green rounded-[1vw]'></div>

                        <div>
                            <p className='mt-[-0.4vw] text-[0.8vw]'>
                                75% - 100%
                            </p>

                            <p className='text-[0.8vw] mt-[-0.1vw] font-bold'>
                                Low Risk
                            </p>
                        </div>
                    </div>
                </div>

                <p className='text-blue-light underline cursor-pointer absolute mt-[0.4vw]'>
                    View More
                </p>
            </div>
        </div>
    </div>
  )
}

export default Resultscards