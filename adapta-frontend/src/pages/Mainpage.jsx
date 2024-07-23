import React from 'react'
import Navbar from '../components/Navbar'
import Computescore from '../components/Computescore'
import Protectedarea from '../components/Protectedarea'
import Map from '../components/Map'
import Compositescore from '../components/Compositescore'

const Mainpage = () => {
  return (
    <div>
        <div>
            <Navbar />

            <div className='pt-[1vw] pl-[1vw] flex'>
              <div className='mr-[1vw]'>
                <Computescore />
                <Protectedarea />
              </div>

              <div className='flex'>
                <Map />
                <Compositescore />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage