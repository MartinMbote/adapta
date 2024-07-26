import React, { useState } from 'react'
import Select from 'react-select';

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

    
    //
    //Select Componet Code
    const options = [
      { value: 'Avocado', label: 'Avocado' },
      { value: 'Tea', label: 'Tea' },
      { value: 'Banana', label: 'Banana' }
    ];


    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const customStyles = {
        control: (provided, state) => ({
          ...provided, // inherit the default styles
          background: 'white', // set the background color of the control
          width: '12vw',
          height: '1vw',
          borderWidth: '0.15vw',
          borderColor: state.isFocused ? 'blue' : '#F3F3F3', // change the border color based on focus state
          boxShadow: state.isFocused ? null : null, // remove the default box shadow
          '&:hover': {
            borderColor: state.isFocused ? 'blue' : 'grey' // change the border color on hover
          }
        }),
        option: (provided, state) => ({
          ...provided, // inherit the default styles
          background: state.isSelected ? 'blue' : 'white', // set the background color based on selection state
          color: state.isSelected ? 'white' : 'black', // set the text color based on selection state
          '&:hover': {
            background: 'lightgrey', // change the background color on hover
            color: 'black' // change the text color on hover
          }
        })
      };
    // //
    // //
    

  return (
    <div>
        <div className='bg-white w-[17.4vw] text-adapta-blue font-semibold text-[0.8vw] pt-[1.3vw] pb-[0.9vw] pl-[1.3vw] rounded-[0.4vw] border-[0.15vw] border-adapta-grey'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className='ml-[0.3vw]'>
                        Enter Location:
                    </span>

                    <input name="location" className='border-[0.15vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw]' />
                </label>

                <label>
                    <br />
                    <span className='ml-[0.3vw]'>
                        Enter Planting Period:
                    </span>

                    <input name="plantingPeriod" className='border-[0.15vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw]' />
                </label>             

                <br />

                {/* <label>
                    Select a Crop:

                    <br />

                    <select name="selectedCrop" className='border-[0.15vw] px-[0.3vw] mb-[0.5vw] rounded-[0.4vw] mt-[0.2vw] w-[12vw] h-[1.6vw] cursor-pointer'>
                        <option value="apple">Avocado</option>
                        <option value="banana">Tea</option>
                        <option value="orange">Crop</option>
                    </select>
                </label> */}

                <div>
                    <label>
                    Select a Crop:

                    <br />

                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={options}
                            placeholder="Search Crop"
                            styles={customStyles}
                            
                        />
                        {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
                    </label>
                </div>

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