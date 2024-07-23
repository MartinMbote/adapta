import React, { useState } from 'react'

const Computescore = () => {   
    
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);  
        
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }

  return (
    <div>
        <div className='bg-white w-[15.5vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1.3vw] pb-[0.9vw] pl-[1.3vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className='ml-[0.3vw]'>
                        Enter Location:
                    </span>

                    <input name="location" className='border-[0.15vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw]' />
                </label>

                <label>
                    <span className='ml-[0.3vw]'>
                        Enter Planting Period:
                    </span>

                    <input name="plantingPeriod" className='border-[0.15vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw]' />
                </label>             

                <br />

                <label>
                    Select a Crop:

                    <br />

                    <select name="selectedCrop" className='border-[0.15vw] px-[0.3vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw] cursor-pointer'>
                        <option value="apple">Avocado</option>
                        <option value="banana">Tea</option>
                        <option value="orange">Crop</option>
                    </select>
                </label>

                <div className='w-[12vw]'>
                    <div className='flex justify-center'>
                        <button className='border w-[10vw] h-[1.8vw] rounded-[0.4vw] bg-adapta-blue-light text-white text-[0.8vw] font-semibold mt-[0.7vw]'>
                            Compute Score
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Computescore