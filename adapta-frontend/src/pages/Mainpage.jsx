import React from 'react'
import Navbar from '../components/Navbar'
import Computescore from '../components/Computescore'

const Mainpage = () => {
  return (
    <div>
        <div>
            <Navbar />

            <div className='pt-[1vw] pl-[1vw]'>
              <Computescore />
            </div>
        </div>
    </div>
  )
}

export default Mainpage