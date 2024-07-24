import React from 'react'
import { piechartbg, pieballimg } from '../assets'

const Compositescore = () => {
  return (
    <div>
        <div className='bg-white w-[15.5vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1.3vw] h-[27.8vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey mx-[1vw] flex justify-center'>
            <div>
                <div className='flex justify-center'>
                    <div className='bg-adapta-blue-light w-[10vw] h-[1.7vw] pt-[0.15vw] text-center text-white rounded-[0.8vw] text-[0.9vw] mb-[1.2vw]'>
                        <p>
                            Composite Score
                        </p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <img src={piechartbg} className='w-[11vw]' />
                    <img src={pieballimg} className='w-[11vw] absolute' style={{ transform: 'rotate(106deg)' }} />
                </div>

                <p className='text-center mt-[1.7vw] font-bold text-[0.9vw]'>
                    Key Metrics
                </p>

                <div className='flex justify-center pt-[0.8vw] text-white text-[0.8vw]'>
                    <div>
                        <div className='w-[13vw] h-[2vw] flex justify-center gap-[1.35vw] bg-green rounded-[0.2vw]'>
                            <p className='mt-[0.4vw]'>
                                Low Risk
                            </p>                        

                            <div className='w-[0.1vw] h-[1vw] mt-[0.55vw] bg-white'></div>

                            <p className='mt-[0.4vw]'>
                                75% - 100%
                            </p>
                        </div>

                        <div className='w-[13vw] h-[2vw] flex justify-center gap-[1.35vw] mt-[1vw] bg-orange rounded-[0.2vw]'>
                            <p className='mt-[0.4vw]'>
                                Medium Risk
                            </p>                        

                            <div className='w-[0.1vw] h-[1vw] mt-[0.55vw] bg-white'></div>

                            <p className='mt-[0.4vw]'>
                                25% - 75%
                            </p>
                        </div>

                        <div className='w-[13vw] h-[2vw] flex justify-center gap-[1.35vw] mt-[1vw] bg-red rounded-[0.2vw]'>
                            <p className='mt-[0.4vw]'>
                                High Risk
                            </p>                        

                            <div className='w-[0.1vw] h-[1vw] mt-[0.55vw] bg-white'></div>

                            <p className='mt-[0.4vw]'>
                                25% - 75%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compositescore