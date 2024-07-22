import React from 'react'
import Navbar from '../components/Navbar'
import Computescore from '../components/Computescore'

const Mainpage = () => {
  return (
    <div>
        <div>
            <Navbar />

            <div className='pt-[2vw] pl-[1.4vw]'>
              <Computescore />
            </div>
        </div>
    </div>
  )
}

export default Mainpage