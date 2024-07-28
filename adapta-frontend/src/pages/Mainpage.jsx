import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Computescore from '../components/Computescore'
import Protectedarea from '../components/Protectedarea'
import Map from '../components/Map'
import Compositescore from '../components/Compositescore'
import Plan from '../components/Plan'
import Resultscards from '../components/Resultscards'

const Mainpage = () => {

  const [location, setLocation] = useState(null);
  const [clickedPoint, setClickedPoint] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  console.log(location);
  console.log("Clicked Location Update : " + clickedPoint);

  return (
    <div>
        <div>
            <Navbar />

            <div className='pt-[1vw] pl-[1vw]'>
              <div className='flex'>
                <div className='mr-[1vw] mb-[1vw]'>
                  <Computescore onLocationChange={handleLocationChange} />
                  <Protectedarea />
                </div>

                <div className='flex'>
                  <Map location={location} setClickedPoint={setClickedPoint} />
                  <Compositescore />
                  <Plan />
                </div>
              </div>

              <div className='flex gap-[1vw]'>
                <Resultscards />
                <Resultscards />
                <Resultscards />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage